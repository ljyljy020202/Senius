import React from "react";
import PropTypes from "prop-types";
import "./styles/HistoryItem.css";

function HistoryItem({ title, date, description, points, status, isPositive }) {
    return (
        <div className={`history-item ${isPositive ? 'positive' : 'negative'}`}>
            <div className="history-info">
                <div className="history-title">{title}</div>
                <div className="history-date">{date}</div>
                <div className="history-description">{description}</div>
            </div>
            <div className="history-points">
                <div className="points-text">{points}</div>
                <div className="points-status">{status}</div>
            </div>
        </div>
    );
}

HistoryItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    points: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    isPositive: PropTypes.bool.isRequired,
};

export default HistoryItem;
