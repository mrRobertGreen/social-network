import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
	setCurrentPage, followRequest, unfollowRequest, requestUsers,
} from "../../redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";
import {
	getCurrentPage,
	getCurrentPageInterval, getInFollowingProgress, getIntervalSize,
	getIsFetching,
	getPageSize,
	getTotalUsersCount,
	getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.pageSize, this.props.currentPage);
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(this.props.pageSize, pageNumber);
	};

	render() { // render() вызывается, когда приходят новые props или изменяется local state
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

const mapStateToProps = (state) => ({ // mapStateToProps вызывается при каждом изменениии в state
	users: getUsers(state),            // он сравнивает свою часть state с новым state и в зависимости от этого либо
	totalUsersCount: getTotalUsersCount(state),  // прокидывает новые props, либо ничего не делает
	currentPage: getCurrentPage(state),    // объекты не равны <=> это разные объекты
	pageSize: getPageSize(state),
	isFetching: getIsFetching(state),
	currentPageInterval: getCurrentPageInterval(state),
	intervalSize: getIntervalSize(state),
	inFollowingProgress: getInFollowingProgress(state),
});

const mapDispatchToProps = {
	setCurrentPage,
	getUsers: requestUsers,
	followThunk: followRequest,
	unfollowThunk: unfollowRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);