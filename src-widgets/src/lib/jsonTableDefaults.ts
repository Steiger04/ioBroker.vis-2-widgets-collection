/**
 * The defaults of the JSON table fields a reader still needs beside the widget's reading.
 *
 * @module lib/jsonTableDefaults
 * @remarks
 * An unset field reads its default before the widget sees it (`lib/fieldDefaults`). These three are
 * read besides: the page size and the Flattening-Tiefe for 0 and for an emptied field (''), which
 * they read like 0, the page sizes for text that names none, and the Flattening-Tiefe by the column
 * editor, which reads the raw data. One source: the field definitions (`lib/jsonTableFields`) take their
 * `default` from here. A plain module without React, so the pure table modules can import it.
 */

/** The rows per page (`tablePageSize`); also for a page size of 0. */
export const TABLE_PAGE_SIZE_DEFAULT = 25;

/** The page sizes offered (`tablePageSizeOptions`), comma-separated; also for text that names none. */
export const TABLE_PAGE_SIZE_OPTIONS_DEFAULT = '10,25,50,100';

/** The Flattening-Tiefe (`tableMaxDepth`); also for 0 and for the raw data of the column editor. */
export const TABLE_MAX_DEPTH_DEFAULT = 10;
