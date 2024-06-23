import { Controller, Get, Put, Delete, Post } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {

    constructor(private songsService: SongsService) {}

    @Get()
    findAll() {
        return this.songsService.create("Wonderful wonder");
    }

    @Post()
    createNewSong() {
        return this.songsService.findAll();
    }

    @Get(":id") // Get /songs/:id
    findOne() {
        return `The song with id:`;
    }

    @Put(":id")
    update() {
        return "Updated the song with the id:";
    }

    @Delete(":id")
    deleteData() {
        return "Deleted songs with the id:";
    }

}
