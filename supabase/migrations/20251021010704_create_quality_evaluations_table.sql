/*
  # Create Quality Evaluations Schema

  ## New Tables
  
  ### `evaluations`
  - `id` (uuid, primary key) - Unique identifier for each evaluation
  - `app_name` (text) - Name of the application being evaluated
  - `app_type` (text) - Type of educational application
  - `evaluator_name` (text) - Name of the person conducting the evaluation
  - `created_at` (timestamptz) - Timestamp of evaluation creation
  
  ### Evaluation Criteria Scores (0-5 scale)
  - `functionality_score` (numeric) - Functionality and correctness
  - `reliability_score` (numeric) - Reliability and stability
  - `usability_score` (numeric) - Usability and user experience
  - `efficiency_score` (numeric) - Performance and efficiency
  - `maintainability_score` (numeric) - Maintainability and code quality
  - `portability_score` (numeric) - Portability across platforms
  - `final_score` (numeric) - Calculated average score
  - `observations` (text) - Additional observations and comments

  ## Security
  - Enable RLS on `evaluations` table
  - Add policy for public read access (educational purposes)
  - Add policy for public insert access (anyone can submit evaluations)
*/

CREATE TABLE IF NOT EXISTS evaluations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  app_name text NOT NULL,
  app_type text NOT NULL,
  evaluator_name text NOT NULL DEFAULT '',
  functionality_score numeric CHECK (functionality_score >= 0 AND functionality_score <= 5) NOT NULL,
  reliability_score numeric CHECK (reliability_score >= 0 AND reliability_score <= 5) NOT NULL,
  usability_score numeric CHECK (usability_score >= 0 AND usability_score <= 5) NOT NULL,
  efficiency_score numeric CHECK (efficiency_score >= 0 AND efficiency_score <= 5) NOT NULL,
  maintainability_score numeric CHECK (maintainability_score >= 0 AND maintainability_score <= 5) NOT NULL,
  portability_score numeric CHECK (portability_score >= 0 AND portability_score <= 5) NOT NULL,
  final_score numeric CHECK (final_score >= 0 AND final_score <= 5) NOT NULL,
  observations text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE evaluations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view evaluations"
  ON evaluations
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can create evaluations"
  ON evaluations
  FOR INSERT
  WITH CHECK (true);