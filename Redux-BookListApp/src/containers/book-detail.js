
import React, { Component } from 'react';
import { connect } from 'react-redux';

 class BookDetail extends Component {

	render() {

		if(!this.props.activeBook){
			return (
 		      <div>Select a book to get started</div>
 		     );

 	    } 


		return (
            <div className ="container">
               <h1> Book Details : </h1>
			   <div>
			   <h3>{this.props.activeBook.title}</h3>

				 <h4>{this.props.activeBook.detail}</h4>

			   </div>
			</div>
		);
	}
}

	function mapStateToProps(state) {
		return {
		activeBook: state.activeBook
	  };
	}

	// function mapDispatchToProps(dispatch) {
	// 	return {

	// 	};
	// }





export default connect(mapStateToProps)(BookDetail);
