import React from "react";
import Paginator from "../common/Paginator/Paginator";
import UserItem from "./UserItem/UserItem";

const Users = ({currentPageInterval,
	               intervalSize,
	               inFollowingProgress,
	               unfollowThunk,
	               followThunk,
	               onPageChanged,
	               toggleCurrentIntervalPage,
	               currentPage,
	               pageSize,
	               totalUsersCount, ...props}) => {

	return (
		<div>
			<Paginator intervalSize={intervalSize}
			           onPageChanged={onPageChanged}
			           currentPage={currentPage}
			           pageSize={pageSize}
			           totalItemsCount={totalUsersCount}
			/>

			{
				props.users.map(user => (
					<UserItem user={user}
					          inFollowingProgress={inFollowingProgress}
					          unfollowThunk={unfollowThunk}
					          followThunk={followThunk}
					/>))
			}
		</div>
	)
};


export default Users;