import { TestBed } from '@angular/core/testing';

import { VideoModalService } from './video-modal.service';

describe('VideoModalService', () => {
  let service: VideoModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
