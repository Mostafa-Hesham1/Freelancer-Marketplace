import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job } from '../models/job.model';
import { ObjectId } from 'mongodb';

@Injectable()
export class JobService {
  constructor(@InjectModel(Job.name) private readonly jobModel: Model<Job>) {}

  async addJob(job: any): Promise<{ message: string }> {
    const newJob = new this.jobModel(job);
    await newJob.save();
    return { message: 'Job added!' };
  }

  async getJobs(): Promise<Job[]> {
    return this.jobModel.find().exec();
  }

  async deleteJob(jobId: ObjectId): Promise<string> {
    await this.jobModel.deleteOne({ _id: jobId });
    return 'Job deleted!';
  }

  async updateJob(jobId: ObjectId, job: any): Promise<string> {
    await this.jobModel.updateOne({ _id: jobId }, job);
    return 'Job updated!';
  }

  async addProposal(jobId: ObjectId, proposal: any): Promise<{ message: string }> {
    const job = await this.jobModel.findById(jobId).exec();
    const newProposal = {
      userId: proposal.userId,
      freelancerName: proposal.freelancerName,
      freelancerEmail: proposal.freelancerEmail,
      coverLetter: proposal.coverLetter,
      hourlyRate: proposal.hourlyRate,
      estimatedHours: proposal.estimatedHours,
      price: proposal.price,
      priceType: proposal.priceType,
    };
    await this.jobModel.updateOne(
      { _id: jobId },
      { $push: { proposals: newProposal } }
    );
    return { message: 'Proposal added!' };
  }

  async getProposals(jobId: ObjectId): Promise<any[]> {
    const job = await this.jobModel.findById(jobId).exec();
    return job.proposals;
  }

  async getUserProposals(userId: string): Promise<any[]> {
    return this.jobModel.find({ 'proposals.userId': userId }, { 'proposals.$': 1 }).exec();
  }

  async getJobProposals(jobId: ObjectId): Promise<any[]> {
    const job = await this.jobModel.findById(jobId).exec();
    return job.proposals;
  }
}
