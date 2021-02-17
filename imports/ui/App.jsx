import React from 'react';
import { Meteor } from "meteor/meteor";
import TitleBar from "./TitleBar";
import BooksList from "./BooksList"

import { BooksInfo } from "../api/booksInfo"



export default class App extends React.Component{

  constructor(props){
    super(props)
  }
  addBooks(title, author, description=null, imageUrl=null){
    const bookId = BooksInfo.insert({userId : Meteor.userId(), title: title, author: author, description: description, imageUrl: imageUrl})
    //Meteor.user().insert({booksId : [bookId]})
    //Meteor.users.update({_id:Meteor.user()._id}, { $set: {booksId : bookId} }); -->stackoverflow code didnot work

  }

  render(){
 
    return(
      <div>
        <TitleBar title="Books Trade" getUserNam={this.getUserName}/>
        <div className="wrapper">
          <BooksList />
          {Meteor.userId() &&
          <div>
            <button>New Request</button>
            <button>Add Books</button>
          </div>
          } 
          {!Meteor.userId() &&
            <button>Login to Add books</button>
          }
        </div>

      </div>
    );
  }
}