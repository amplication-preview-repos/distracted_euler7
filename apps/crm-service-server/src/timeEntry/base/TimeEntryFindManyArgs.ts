/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TimeEntryWhereInput } from "./TimeEntryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TimeEntryOrderByInput } from "./TimeEntryOrderByInput";

@ArgsType()
class TimeEntryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TimeEntryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TimeEntryWhereInput, { nullable: true })
  @Type(() => TimeEntryWhereInput)
  where?: TimeEntryWhereInput;

  @ApiProperty({
    required: false,
    type: [TimeEntryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TimeEntryOrderByInput], { nullable: true })
  @Type(() => TimeEntryOrderByInput)
  orderBy?: Array<TimeEntryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TimeEntryFindManyArgs as TimeEntryFindManyArgs };
