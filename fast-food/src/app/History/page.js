"use client"
import TopBar from "../TopBar"
import axios from "axios";
axios.defaults.withCredentials = true;
import { useState, useEffect } from "react";
import HistoryBox from "./HistoryBox";

export default function HistoryPage() {

     const [orders, setOrders] = useState([])

    // useEffect(() => {
    //     const getHistory = async () => {
    //         const response = await axios.get("http://localhost:3000/History");
    //         const orders1 = response.data;
    //         console.log("orders1: ", orders1)
            

    //         orders1.forEach(order => {
    //             //console.log("ORDER.order =-=-=- ", order.order)
    //             const newarr = [...orders, <HistoryBox arrOfObjects={order.order}/>]
    //             setOrders(...orders, newarr)
    //         })



    //     }
    //     getHistory();
    // }, []);


    // return (
    //     <main>
    //         <TopBar />
    //         <h1>History page</h1>
    //         {orders}
    //     </main>
    // )

    useEffect(() => {
        const fetchOrders = async () => {
          try {
            const response = await axios.get("http://localhost:3000/History");
            setOrders(response.data); // Set the fetched orders in state
          } catch (error) {
            console.error("Error fetching orders:", error);
          }
        };
    
        fetchOrders();
      }, []);
    
      return (
        <div>
            
          <h1>Order History</h1>
          {orders.map((orderObj, orderIndex) => (
            <div key={orderIndex} className="order">
              <h2>Order {orderIndex + 1}</h2>
              {orderObj.order.map((item, itemIndex) => (
                <div key={item._id} className="order-item">
                  <p>
                    <strong>Name:</strong> {item.name}
                  </p>
                  <p>
                    <strong>Price:</strong> ${item.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    };
//}