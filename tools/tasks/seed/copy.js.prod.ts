import * as gulp from 'gulp';
import {join} from 'path';

import Config from '../../config';

export = () => {
  return gulp.src([
      join(Config.APP_SRC, '**/*.ts'),
      '!' + join(Config.APP_SRC, '**/*.spec.ts'),
      '!' + join(Config.APP_SRC, '**/*.e2e.ts')
    ])
    .pipe(gulp.dest(Config.TMP_DIR));
};
