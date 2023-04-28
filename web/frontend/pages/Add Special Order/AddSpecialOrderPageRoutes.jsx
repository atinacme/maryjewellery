import React from "react";
import { NavigationMenu } from "@shopify/app-bridge-react";
import { Routes, Route } from "react-router-dom";
import Activity from "./Activity";
import AddSpecialOrderPageLayout from "./AddSpecialOrderPageLayout";
import ProductImages from "./ProductImages";
import ScannedCopy from "./ScannedCopy";
import SelectCustomer from "./SelectCustomer";
import SelectManufacturer from "./SelectManufacturer";
import SpecialOrderDetails from "./SpecialOrderDetails";

/*------------This function has routes defined for add special order page-----------------*/
export default function Index() {
    return (
        <div>
            {/* <NavigationMenu
                navigationLinks={[
                    {
                        destination: "/",
                    },
                    // {
                    //     destination: "/AddSpecialOrderPage/ScannedCopy",
                    // },
                    // {
                    //     destination: "/AddSpecialOrderPage/SelectCustomer",
                    // }
                ]}
            /> */}
            <Routes>
                <Route path="/" element={<AddSpecialOrderPageLayout />}>
                    <Route index={true} element={<SpecialOrderDetails />} />
                    <Route path="/AddSpecialOrderPage/scanned_copy" element={<ScannedCopy />} />
                    <Route
                        path="select_customer"
                        element={<SelectCustomer />}
                    />
                    <Route
                        path="select_manufacturer"
                        element={<SelectManufacturer />}
                    />
                    <Route path="product_images" element={<ProductImages />} />
                    <Route path="activity" element={<Activity />} />
                </Route>
            </Routes>
        </div>
    );
}
