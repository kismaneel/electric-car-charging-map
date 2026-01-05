'use client';

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import StationList from "../station/StationList";
import { Suspense, useState } from "react";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";

export default function StationPage() {
    const [address, setAddress] = useState<string>('');
    const [충전가능여부, set충전가능여부] = useState<string>('');
    const [급속여부, set급속여부] = useState<string>('');

    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-4">
            <div className="flex gap-1">
                {/* 주소 입력 */}
                <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="주소를 입력하세요" />
                {/* 충전기 타입 필터 */}
                <Select value={급속여부} onValueChange={set급속여부}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="급속여부" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">급속</SelectItem>
                        <SelectItem value="2">완속</SelectItem>
                    </SelectContent>
                </Select>
                {/* 충전기 상태 필터 */}
                <Select value={충전가능여부} onValueChange={set충전가능여부}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="충전여부" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">충전 가능</SelectItem>
                        <SelectItem value="0">충전 불가능</SelectItem>
                    </SelectContent>
                </Select>
            </div>


            {/* 필터링된 충전소 목록 */}
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <StationList address={address} 충전가능여부={충전가능여부} 급속여부={급속여부} />
                </Suspense>
            </div>
        </main>
    );
}