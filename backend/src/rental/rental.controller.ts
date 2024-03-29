import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { CreateRentalDto } from './dto/create-rental.dto';
import { RentalService } from './rental.service';
import { JwtGuard } from 'src/auth/guard';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@UseGuards(JwtGuard)
@Controller('rental')
@ApiTags('rental')
export class RentalController {
  constructor(private service: RentalService) {}

  @Post()
  @ApiBody({ type: CreateRentalDto })
  @ApiOperation({ summary: 'Create a rental' })
  createRental(@GetUser('id') userId: string, @Body() dto: CreateRentalDto) {
    return this.service.createRental(userId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Find your rentals' })
  getMyRentals(@GetUser('id') userId: string) {
    return this.service.getMyRentals(userId);
  }
}
