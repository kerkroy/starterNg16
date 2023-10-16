import { Mapper } from 'src/app/core/mapper';
import { FlyInterface } from 'src/app/core/fly/fly.model';

export interface FlyEntity {
    id: string;    
    travel: string;    
    load: string;    
    departure: Date;
}

export class FlyImplementationRepositoryMapper extends Mapper<FlyEntity[], FlyInterface[]> {
    mapFrom(param: FlyEntity[]): FlyInterface[] {
        return param.map( fly => { return {
            id: fly.id,
            travel: fly.travel,
            load: fly.load,
            departure: fly.departure
        };
        })
    }
    mapTo(param: FlyInterface[]): FlyEntity[] {
        return param.map( fly => { return {
            id: fly.id,
            travel: fly.travel,
            load: fly.load,
            departure: fly.departure
        };
        })
    }
}