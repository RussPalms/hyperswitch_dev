-- This file should undo anything in `up.sql`
ALTER TABLE payment_methods ADD COLUMN IF NOT EXISTS payer_country TEXT[];