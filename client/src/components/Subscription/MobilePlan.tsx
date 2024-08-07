import React from 'react';

export const MobilePlan = ({ plan }) => {
    return (
        <div className='flex justify-center'>
            <div className="w-full max-w-[500px] p-5 bg-[#1F1F1F] border border-solid border-[#999999] text-white rounded-lg shadow-lg mx-4 sm:mx-auto">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-bold">Price</p>
                        <p>{plan.price}</p>
                    </div>
                    <div>
                        <p className="font-bold">Free Trial</p>
                        <p>{plan.freeTrial}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="font-bold">Content</p>
                        <p>{plan.content}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="font-bold">Devices</p>
                        <p>{plan.devices}</p>
                    </div>
                    <div>
                        <p className="font-bold">Cancel Anytime</p>
                        <p>{plan.cancelAnytime}</p>
                    </div>
                    <div>
                        <p className="font-bold">HDR</p>
                        <p>{plan.hdr}</p>
                    </div>
                    <div>
                        <p className="font-bold">Dolby Atmos</p>
                        <p>{plan.dolbyAtmos}</p>
                    </div>
                    <div>
                        <p className="font-bold">Ad-Free</p>
                        <p>{plan.adFree}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="font-bold">Offline Viewing</p>
                        <p>{plan.offlineViewing}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="font-bold">Family Sharing</p>
                        <p>{plan.familySharing}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
