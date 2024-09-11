// import { Test, TestingModule } from '@nestjs/testing';
// import { CatsService } from './cats.service';
// import { DbModule } from 'src/db/db.module';
// import { DbService } from 'src/db/db.service';

// describe('CatsService', () => {
//   let catsService: CatsService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       imports: [],
//       providers: [
//         CatsService,
//         {
//           provide: DbService,
//           useValue: {
//             findAll: jest.fn().mockResolvedValue([]),
//             create: jest.fn().mockImplementation((cat) => ({ id: 1, ...cat })),
//             findOne: jest.fn().mockResolvedValue(),
//             update: jest.fn().mockImplementation((id, cat) => ({ id, ...cat })),
//             remove: jest.fn().mockResolvedValue(undefined),
//           },
//         },
//       ],
//     }).compile();

//     catsService = module.get<CatsService>(CatsService);
//   });

//   it('should return empty array if no cats', async () => {
//     expect(await catsService.findAll()).toEqual([]);
//   });

//   it('should find all cats', async () => {
//     await catsService.create({ name: 'Cat' });
//     expect(await catsService.findAll()).toEqual([{ id: 1, name: 'Cat' }]);
//   });

//   it('should create a cat', async () => {
//     expect(await catsService.create({ name: 'Cat' })).toEqual({
//       id: 1,
//       name: 'Cat',
//     });
//   });

//   it('should find a cat', async () => {
//     await catsService.create({ name: 'Cat' });
//     expect(await catsService.findOne(1)).toEqual({ id: 1, name: 'Cat' });
//   });

//   it('should update a cat', async () => {
//     const testCat = await catsService.create({ name: 'Cat' });
//     expect(await catsService.update(testCat.id, { name: 'Dog' })).toEqual({
//       id: testCat.id,
//       name: 'Dog',
//     });
//   });

//   it('should remove a cat', async () => {
//     await catsService.create({ name: 'Cat' });
//     await catsService.remove(1);
//     expect(await catsService.findAll()).toEqual([]);
//   });
// });
