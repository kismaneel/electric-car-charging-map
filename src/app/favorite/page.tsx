"use client";

import StationCard from "@/components/custom/card/StationCard";
import { Input } from "@/components/ui/input";
import usefavoriteStore from "@/store/favoriteStore";
import { Suspense, useState } from "react";
import FavoriteList from "@/app/favorite/favoriteList";

export default function FavoritePage() {
  const [address, setAddress] = useState<string>("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-4">
        <Input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="주소를 입력하세요"
        />
        <즐겨찾기리스트컴포넌트 />
        <Suspense fallback={<div>로딩중...</div>}>
            <FavoriteList address={address} />
        </Suspense>
    </main>
  );
}

const 즐겨찾기리스트컴포넌트 = () => {
  const favoriteStationList = usefavoriteStore(
    (state) => state.favorites
  );

  return (
    <>
      <h2>즐겨찾기</h2>
      <div className="flex w-full gap-1 flex-wrap">
        {favoriteStationList.map((station) => {
          return <StationCard 
            key={station.cpId} 
            {...station}
            // getLocation={station.getLocation} 
            // isAvailable={station.isAvailable}
            // isFastCharger={station.isFastCharger}
            />
        })}
      </div>
    </>
  );
};