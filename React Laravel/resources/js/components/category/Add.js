import React, { Component } from 'react';

export default class Add extends Component {
    constructor(){
        super();
        this.state= {
            categoryName : ''
        }
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeCategory(event){
        this.setState({
            categoryName : event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault();
        const category ={
            categoryName: this.state.categoryName
        }
        axios.post('http://localhost:8000/category/store',category)
        .then(res=>console.log(res.data));
    }
    render() {
        return (
            <div>
               <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label for="category-name">Category</label>
                    <input type="text"
                        className="form-control" 
                        placeholder="category"
                        name="categoryName" 
                        value={this.state.categoryName}
                        onChange = {this.onChangeCategory}
                        />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
