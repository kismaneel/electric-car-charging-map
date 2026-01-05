'use client';

export default function KeyPage() {
    return (
        <div>
            <div>
                NEXT_PUBLIC_EV_CHARGING_API_KEY: {process.env.NEXT_PUBLIC_EV_CHARGING_API_KEY}
            </div>
            <div>
                TEXT_KEY: {process.env.TEXT_KEY} 
            </div>
        </div>
    );
}
