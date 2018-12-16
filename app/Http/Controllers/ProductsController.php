<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Product;

use Auth;

class ProductsController extends Controller
{
    public function index(){
        return Product::orderBy('created_at', 'desc')->get();
    }

    public function store(Request $req){
        $product = Product::create($req->all() + ['user_id' => Auth::id()]);
        return $product;
    }

    public function show($id){
        $product = Product::find($id);
        //Check if the product exists or not
        if(count($product) > 0){
            return response()->json($product);
        } else {
            return response()->json(['error' => 'Resource not found.', 'status' => 404]);
        }

    }

    public function update(Request $req, $id){
        $product = Product::find($id);
        $product->update($req->all());
        return response()->json(['product' => $product, 'success' => true ]);
    }

    public function destroy($id){
        // return $id;
        try{
            $product = Product::find($id);
            $product->delete();
            return response()->json(['msg' => 'Product Deleted Successfully', 'success' => true]);

        } catch(\Exception $e) {
            return response()->json(['msg' => 'Unable to delete the product', 'success'=> false]);
        }
    }
}
