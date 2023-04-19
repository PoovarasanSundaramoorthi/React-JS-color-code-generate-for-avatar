import React from "react";
import moment from "moment";

// Core Components

// Helpers
// import { getInitials } from "../../utils/helper";
import { getColorCode } from "./color";
/**
 * Get All User Ids
 *
 * @param {*} ticketHistory
 * @returns
 */
function getUserIds(ticketHistory) {
  let userIds = [];
  ticketHistory?.forEach((ticketHistoryDetail) => {
    const userId = ticketHistoryDetail?.userId;
    if (userIds.indexOf(userId) < 0) {
      userIds.push(userId);
    }
  });

  let ticketHistoryUserColors = [];
  userIds.forEach((userId) => {
    ticketHistoryUserColors.push({
      userId: userId,
      color: getColorCode(),
    });
  });

  return ticketHistoryUserColors;
}

/**
 * Get User Color Code
 *
 * @param {*} colors
 * @param {*} userId
 * @returns
 */
function getUserColorCode(colors, userId) {
  let color = "";

  colors.forEach((userColor) => {
    if (userColor.userId === userId) {
      color = userColor.color;
    }
  });

  return color;
}

function TicketHistory(props) {
  const { ticketHistory } = props;

  const ticketCount = ticketHistory?.length;

  const colorLists = getUserIds(ticketHistory);

  return (
    <div className="mt-5">
      {ticketCount > 0 ? (
        <div className="px-5 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div>
              {ticketHistory?.map((ticketHistoryDetail, index) => {
                console.log("tickethistory", ticketHistory);
                return (
                  <div className="flex relative pb-6">
                    {ticketCount !== index + 1 && (
                      <div className="h-full w-12 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-0.5 bg-gray-100 pointer-events-none"></div>
                      </div>
                    )}

                    <div
                      className="flex-shrink-0 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white uppercase"
                      style={{ backgroundColor: `${getUserColorCode(colorLists, ticketHistoryDetail.userId)}` }}
                    >
                      {/* {getInitials(ticketHistoryDetail?.firstName, ticketHistoryDetail?.lastName)} */}
                    </div>

                    <div className="flex-grow pl-4">
                      <b>{ticketHistoryDetail?.description}</b>
                      <p className="text-gray-400 text-xs tracking-widest mt-0.5">
                        {ticketHistoryDetail?.time && moment.utc(ticketHistoryDetail?.time).fromNow()}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default TicketHistory;
