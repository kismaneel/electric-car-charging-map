'use client';
import { 
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow 
} from "@/components/ui/table";    
import kepcoAPI from "../../api/ev/kepcoAPI";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Station } from "@/api/ev/types";

const StationList = ({ address, 충전가능여부, 급속여부 }: { address: string; 충전가능여부: string; 급속여부: string }) => {
    const { data } = useSuspenseQuery({
        queryKey: ['getEvSearchList', address],
        staleTime: 1000 * 60,
        queryFn: () => kepcoAPI.getEvSearchList({ page: 1, perPage: 5, addr: address }),
    });

    // const filteredData = data?.filter((station) => {
    //     console.log('충전가능여부:', 충전가능여부, '급속여부:', 급속여부);
    //     const matchCharge = 충전가능여부 ? station.isAvailable() === (충전가능여부 === "1") : true;
    //     const matchSpeed = 급속여부 ? station.isFastCharger() === (급속여부 === "2") : true;

    //     return matchCharge && matchSpeed;
    // });


    return (
        <div>
            <Table className="max-w-screen-md">
                <TableHeader>
                    <TableRow>
                        <TableHead>번호</TableHead>
                        <TableHead>주소</TableHead>
                        <TableHead>장소명</TableHead>
                        <TableHead>충전기</TableHead>
                        <TableHead>충전여부</TableHead>
                        {/* <TableHead>업데이트</TableHead> */}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((station: Station, index: number) => {
                        // 1. 여기서 각 station에 대해 필터 조건을 검사합니다.
                        const matchCharge = 충전가능여부 ? station.isAvailable() === (충전가능여부 === "1") : true;
                        const matchSpeed = 급속여부 ? station.isFastCharger() === (급속여부 === "2") : true;
                        
                        // 2. 두 조건이 모두 맞으면 true, 아니면 false
                        const isVisible = matchCharge && matchSpeed;

                        return (
                            <TableRow 
                                key={station.cpId + station.csId + index}
                                className={isVisible ? '' : 'bg-red-200'}
                            >
                                <TableCell>{index + 1}</TableCell>  
                                <TableCell>{station.addr}</TableCell>
                                <TableCell>{station.csNm}</TableCell>
                                <TableCell>{station.cpNm}</TableCell>
                                <TableCell>{station.cpStat}</TableCell>
                                {/* <TableCell>{station.statUpdatedatetime}</TableCell> */}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}

export default StationList;