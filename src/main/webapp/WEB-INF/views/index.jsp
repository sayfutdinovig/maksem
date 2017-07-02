<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<script src="<c:url value="/resources/js/jquery-3.2.1.min.js"/>" type="text/javascript"></script>
<script src="<c:url value="/resources/js/react/react.js"/>" type="text/javascript"></script>
<script src="<c:url value="/resources/js/react/react-dom.js"/>" type="text/javascript"></script>
<script src="<c:url value="/resources/js/react/react-dom-server.js"/>" type="text/javascript"></script>
<script src="<c:url value="/resources/js/react/react-with-addons.js"/>" type="text/javascript"></script>
<script src="<c:url value="/resources/js/babel/browser.min.js"/>" type="text/javascript"></script>
<script src="<c:url value="/resources/js/bootstrap/bootstrap.js"/>" type="text/javascript"></script>
<script src="<c:url value="/resources/js/app.js"/>" type="text/javascript"></script>

<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/style.css"/>">
<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/bootstrap.css"/>">

<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>


 <ul id="root">
   <li class = "close-catalog" >
     ${root.name}
     <div class = "dropdown" >
       <a href = "#" class = "dropdown-toggle-js" data-toggle = "dropdown" >
         Edit
         <b class = "caret" > </b>
       </a>
       <ul class = "dropdown-menu" >
         <li> <a href = "#" class = "btn btn-lg btn-success" data-toggle = "modal" data-target = "#basicModal"> Add </a> </li>
         <li> <a href = "#"> Rename </a> </li>
         <li> <a href = "#"> Delete </a> </li>
       </ul>
     </div></li>
 </ul>

 <div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-body">
        <h3>Please write </h3>
    </div>


    <form id="form">
        <input name="name" type="text" value="" required/>
    <input name="id" type="hidden" value ="${root.id}" />
        <div class="modal-footer">
       <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Add node</button>
    </div>
    </form>
    </div>
    </div>
    </div>


  </body>
</html>
