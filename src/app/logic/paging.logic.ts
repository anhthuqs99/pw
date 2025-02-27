export class Paging {
  private currentPage: number;
  private pageSize: number;
  private canLoadMore = true;

  constructor(currentPage = 0, pageSize = 30) {
    this.currentPage = currentPage;
    this.pageSize = pageSize;
  }

  public getPageSize(): number {
    return this.pageSize;
  }

  public getCurrentPage(): number {
    return this.currentPage;
  }

  public nextPage(lastPageSize: number): void {
    this.currentPage++;
    this.canLoadMore = this.canLoadMore && lastPageSize >= this.pageSize;
  }

  public getCanLoadMore(): boolean {
    return this.canLoadMore;
  }

  public getPagingParameters(): string {
    return `?per_page=${this.pageSize}&page=${this.currentPage}`;
  }


}