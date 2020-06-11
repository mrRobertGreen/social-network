import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
	toggleIsFollowed,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	toggleIsFetching, toggleCurrentIntervalPage
} from "../../redux/usersReducer";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching();
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
				this.props.toggleIsFetching();
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching();
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
				this.props.toggleIsFetching();
			});
	};

	render() {
		return (
			<>
				{this.props.isFetching && <Preloader/>}
				<Users
					{...this.props}
					onPageChanged={this.onPageChanged}
				/>
			</>

		)
	}
}

const mapStateToProps = (state) => ({
	users: state.usersPage.users,
	totalUsersCount: state.usersPage.totalUsersCount,
	currentPage: state.usersPage.currentPage,
	pageSize: state.usersPage.pageSize,
	isFetching: state.usersPage.isFetching,
	currentPageInterval: state.usersPage.currentPageInterval,
	pageIntervalSize: state.usersPage.pageIntervalSize,

});

const mapDispatchToProps = {
	toggleIsFollowed,
	setUsers,
	setTotalUsersCount,
	setCurrentPage,
	toggleIsFetching,
	toggleCurrentIntervalPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);