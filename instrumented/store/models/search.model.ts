import { Item } from '../../components/CardsList/interfaces/cardslist.interface';
import { PageInfo } from '../../components/Modal/interfaces/videoDetail.interface';

export interface Search {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}
