import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";
import BooksIndex from "../components/BooksIndex";
import BookDetail from "../components/BookDetail";

export default function Routes() {
  return (
    <Switch>
      <Route path="/books/:id" component={BookDetail} />
      <Route path="/" component={BooksIndex} />
    </Switch>
  );
}
