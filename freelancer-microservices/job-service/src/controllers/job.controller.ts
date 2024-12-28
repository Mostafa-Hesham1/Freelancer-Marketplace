import { Controller, Get, Post, Delete, Put, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { JobService } from '../services/job.service';
import { ObjectId } from 'mongodb';
import { Job } from '../models/job.model';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  async getJobs(): Promise<Job[]> {
    try {
      return await this.jobService.getJobs();
    } catch (error) {
      throw new HttpException('Failed to fetch jobs', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post()
  async addJob(@Body() job: Job): Promise<{ message: string }> {
    try {
      return await this.jobService.addJob(job);
    } catch (error) {
      throw new HttpException('Failed to add job', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async deleteJob(@Param('id') jobId: string): Promise<string> {
    return await this.jobService.deleteJob(new ObjectId(jobId));
  }

  @Put(':id')
  async updateJob(@Param('id') jobId: string, @Body() job: any): Promise<string> {
    return await this.jobService.updateJob(new ObjectId(jobId), job);
  }

  @Post(':id/proposals')
  async addProposal(@Param('id') jobId: string, @Body() proposal: any): Promise<{ message: string }> {
    try {
      return await this.jobService.addProposal(new ObjectId(jobId), proposal);
    } catch (error) {
      throw new HttpException('Failed to add proposal', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id/proposals')
  async getProposals(@Param('id') jobId: string): Promise<any[]> {
    try {
      return await this.jobService.getProposals(new ObjectId(jobId));
    } catch (error) {
      throw new HttpException('Failed to fetch proposals', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('user/:userId/proposals')
  async getUserProposals(@Param('userId') userId: string): Promise<any[]> {
    try {
      return await this.jobService.getUserProposals(userId);
    } catch (error) {
      throw new HttpException('Failed to fetch user proposals', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id/proposals')
  async getJobProposals(@Param('id') jobId: string): Promise<any[]> {
    try {
      return await this.jobService.getJobProposals(new ObjectId(jobId));
    } catch (error) {
      throw new HttpException('Failed to fetch job proposals', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
