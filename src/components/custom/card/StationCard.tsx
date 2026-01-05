import { StationDTO } from "@/api/ev/types";
import useFavoriteStore from "@/store/favoriteStore";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card";

export default function StationCard(props: StationDTO) {
    // 스토어에서 상태와 액션을 가져옵니다.
    const isFavorited = useFavoriteStore((state) => 
        state.favorites.some((fav) => fav.cpId === props.cpId)
    );
    const addFavoriteState = useFavoriteStore((state) => state.addFavorite);
    const removeFavoriteState = useFavoriteStore((state) => state.removeFavorite);

    const toggleFavorite = () => {
        if (isFavorited) {
            removeFavoriteState(props);
        } else {
            addFavoriteState(props);
        }
    };

  return (
    <Card className="w-60">
      <CardHeader>
        <CardTitle>{props.csNm}</CardTitle>
        <CardDescription>{props.addr}</CardDescription>
      </CardHeader>
      <CardContent className="grid">
        <div className="grid grid-cols-3 gap-2">
          <div className="flex items-center gap-2">{props.cpNm}</div>
          <div className="flex items-center gap-2">{props.cpStat === "1" ? "사용가능" : "사용불가"}</div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleFavorite}
          >
            {isFavorited ? (
              <MdFavorite size={32} />
            ) : (
              <MdFavoriteBorder size={32} />
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}