'use client';

import kepcoAPI from "../../api/ev/kepcoAPI";
import { useSuspenseQuery } from "@tanstack/react-query";
// 1. Table 관련 import를 제거하고 StationCard를 import 합니다.
import StationCard from "@/components/custom/card/StationCard";
import { StationDTO } from "@/api/ev/types";

const FavoriteList = ({ address }: { address: string }) => {
    const { data } = useSuspenseQuery({
        queryKey: ['getEvSearchList', address],
        staleTime: 1000 * 60,
        queryFn: () => kepcoAPI.getEvSearchList({ page: 1, perPage: 5, addr: address }),
    });

    return (
        <div className="w-full max-w-screen-lg">
            {/* 2. Table 태그 대신 Grid 레이아웃(div)을 사용합니다. */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data?.map((station: StationDTO, index: number) => {
                    return (
                        <div 
                            key={station.cpId + station.csId + index}
                        >
                            {/* 4. TableRow 대신 StationCard 컴포넌트를 렌더링합니다. */}
                            <StationCard {...station} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FavoriteList;