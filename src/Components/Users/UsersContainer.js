import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
	setCurrentPage,
	toggleCurrentIntervalPage, followThunk, unfollowThunk, getUsers,
} from "../../redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.pageSize, this.props.currentPage);
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(this.props.pageSize, pageNumber);
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
	inFollowingProgress: state.usersPage.inFollowingProgress,
});

const mapDispatchToProps = {
	setCurrentPage,
	toggleCurrentIntervalPage,
	getUsers,
	followThunk,
	unfollowThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);