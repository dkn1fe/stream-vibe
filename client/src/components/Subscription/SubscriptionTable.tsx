import { plans } from "@/shared/utils/planCardInfo";
import { SubscriptionMobile } from "./SubscriptionMobile";
export const SubscriptionTable = () => {


    return (
        <>
            <div className="flex justify-center min-h-screen p-4 pt-12 max-[600px]:hidden">
                <table className="table-auto w-full text-white border-collapse">
                    <thead>
                        <tr className="bg-black p-4 text-white">
                            <th className="px-4 py-4  border border-solid border-[#999999] border-opacity-30">Features</th>
                            {plans.map((plan) => (
                                <th key={plan.name} className="px-4 py-4 border border-solid border-[#999999] border-opacity-30">
                                    {plan.name}
                                    {plan.name === "Standard" && <span className="ml-2 bg-red-500 text-white px-2 py-1 text-xs rounded">Popular</span>}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(plans[0]).map((feature, idx) => feature !== 'name' && (
                            <tr className="border border-solid border-[#999999] border-opacity-30" key={idx}>
                                <td className="px-4 py-2">{feature.charAt(0).toUpperCase() + feature.slice(1).replace(/([A-Z])/g, ' $1')}</td>
                                {plans.map((plan) => (
                                    <td key={plan.name} className="px-4 py-2 border border-solid border-[#999999] border-opacity-30">{plan[feature]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="sm:hidden">
                <SubscriptionMobile />
            </div>
        </>
    );
};

export default SubscriptionTable;
