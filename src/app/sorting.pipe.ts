import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from './interfaces';

@Pipe({
  name: 'sorting',
})
export class SortingPipe implements PipeTransform {
  transform(posts: Array<IPost>, category = ''): Array<IPost> {
    if (!category) {
      return posts;
    }
    return posts.filter((post: IPost) => {
      return post.category.toLowerCase() == category.toLowerCase();
    });
  }
}
