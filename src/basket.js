import { connect } from "react-redux";
import BasketRow from "./basketrow";

function Basket({commonData})
{
    return(
        <div>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product</th>
                        <th>Details</th>
                        <th>Price (Rs)</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {commonData.pids.map(e=>
                        <BasketRow id={e} />
                        )}
                </tbody>
            </table>
        </div>
    );
}
let connectToStore=(state)=>({commonData:state});
export default connect(connectToStore)(Basket);