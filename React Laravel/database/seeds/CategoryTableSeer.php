<?php

use Illuminate\Database\Seeder;
use App\Category;
class CategoryTableSeer extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category = new Category();
        $category->name='hoàng';
        $category->save();
        $category = new Category();
        $category->name='bá';
        $category->save();
        $category = new Category();
        $category->name='thành';
        $category->save();
        $category = new Category();
        $category->name='rin';
        $category->save();
    }
}
