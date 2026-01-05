import { StationDTO, Station } from './types';

class kepcoAPI {
    url = process.env.NEXT_PUBLIC_EV_CHARGING_API || '';
    serviceKey = process.env.NEXT_PUBLIC_EV_CHARGING_API_KEY || '';

    async getEvSearchList({
        page,
        perPage,
        addr
    }: {
        page: number;
        perPage: number;
        addr: string
    }): Promise<Station[]> {
        if(!addr){
            return [];
        }

        const response = await fetch(
            `${this.url}/EVchargeManage.do?apiKey=${this.serviceKey}&returnType=json&page=${page}&perPage=${perPage}&addr=${addr}`,
        )
        .then((response) => response.json())
        .catch((error) => {
            console.error("Error:", error)
            return { data: [] };
        });

        return (response?.data || []).map((data: StationDTO) => new Station(data));
    }    
}

export default new kepcoAPI();