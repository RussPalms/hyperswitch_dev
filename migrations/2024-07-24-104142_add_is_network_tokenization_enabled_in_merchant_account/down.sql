-- This file should undo anything in `up.sql`

ALTER TABLE merchant_account DROP COLUMN IF EXISTS is_network_tokenization_enabled;