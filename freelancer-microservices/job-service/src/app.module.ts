import { Module } from '@nestjs/common';
import { JobListingsModule } from './job-listings/job-listings.module';
import { JobProposalsModule } from './job-proposals/job-proposals.module';
import { JobCategoriesModule } from './job-categories/job-categories.module';

@Module({
  imports: [JobListingsModule, JobProposalsModule, JobCategoriesModule],
})
export class AppModule {}