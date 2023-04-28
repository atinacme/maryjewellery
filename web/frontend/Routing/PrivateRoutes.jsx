import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import { connect } from "react-redux";
import Header from '../components/Header/Header';
import { NavigationMenu } from "@shopify/app-bridge-react";

function PrivateRoutes() {
    const auth = { isAuth: localStorage.getItem("authenticated") };
    return (
        <div>
            {auth.isAuth ?
                <div className="main-content-wrapper">
                    <Dashboard />
                    <div className="main-wrapper">
                        <Header />
                        <Outlet />
                    </div>
                </div>
                :
                <NavigationMenu
                    navigationLinks={[
                        {
                            destination: "/",
                        },
                    ]}
                />
                // <Navigate to="/user_auth" />
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        dashboard_tab: state.dashboard_tab
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);