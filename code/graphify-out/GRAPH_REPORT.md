# Graph Report - .  (2026-07-28)

## Corpus Check
- Corpus is ~30,334 words - fits in a single context window. You may not need a graph.

## Summary
- 332 nodes · 308 edges · 43 communities (38 shown, 5 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.8)
- Token cost: 159,532 input · 68,370 output

## Community Hubs (Navigation)
- Composer Package Metadata
- Advanced Query & Architecture Patterns
- Config & Queue Job Best Practices
- Composer Build Scripts
- Database Performance Best Practices
- Code Style & Testing Conventions
- Skill Docs & Delegation Patterns
- User Model & Factory
- NPM Frontend Tooling
- Events, Notifications & Mail Practices
- Exception Handling Best Practices
- Task Scheduling Best Practices
- Project README & Guidelines
- Composer Plugin Config
- HTTP Client Best Practices
- Routing & Controllers Best Practices
- Validation & Form Requests
- App Service Provider
- Feature Test Scaffold
- Unit Test Scaffold
- MCP Server Config
- Base Controller
- Robots.txt Policy

## God Nodes (most connected - your core abstractions)
1. `/graphify Skill` - 15 edges
2. `Project CLAUDE.md (Laravel Boost Guidelines)` - 12 edges
3. `Security Best Practices` - 10 edges
4. `require-dev` - 9 edges
5. `scripts` - 9 edges
6. `Queue & Job Best Practices` - 9 edges
7. `Database Performance Best Practices` - 8 edges
8. `Events & Notifications Best Practices` - 8 edges
9. `Migration Best Practices` - 8 edges
10. `setup` - 7 edges

## Surprising Connections (you probably didn't know these)
- `PHP Coding Rules` --semantically_similar_to--> `Conventions & Style`  [INFERRED] [semantically similar]
  CLAUDE.md → .claude/skills/laravel-best-practices/rules/style.md
- `Laravel Pint Code Formatter Rules` --semantically_similar_to--> `Conventions & Style`  [INFERRED] [semantically similar]
  CLAUDE.md → .claude/skills/laravel-best-practices/rules/style.md
- `PHPUnit Testing Rules` --semantically_similar_to--> `Testing Best Practices`  [INFERRED] [semantically similar]
  CLAUDE.md → .claude/skills/laravel-best-practices/rules/testing.md
- `Subagent Delegation Pattern` --semantically_similar_to--> `Parallel Subagent Dispatch Pattern`  [INFERRED] [semantically similar]
  .ai/skills/deploying-laravel-cloud/SKILL.md → .claude/skills/graphify/SKILL.md
- `Agentic Development with Laravel Boost` --semantically_similar_to--> `Laravel Boost Guidelines (Foundation Rules)`  [INFERRED] [semantically similar]
  README.md → CLAUDE.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Laravel Best Practices Rule Index Group** — _claude_skills_laravel_best_practices_skill_doc, _claude_skills_laravel_best_practices_rules_advanced_queries_doc, _claude_skills_laravel_best_practices_rules_architecture_doc, _claude_skills_laravel_best_practices_rules_blade_views_doc, _claude_skills_laravel_best_practices_rules_caching_doc, _claude_skills_laravel_best_practices_rules_collections_doc [EXTRACTED 1.00]
- **graphify Reference Documentation Set** — _claude_skills_graphify_skill_doc, _claude_skills_graphify_references_add_watch_doc, _claude_skills_graphify_references_exports_doc, _claude_skills_graphify_references_extraction_spec_doc, _claude_skills_graphify_references_github_and_merge_doc, _claude_skills_graphify_references_hooks_doc, _claude_skills_graphify_references_query_doc, _claude_skills_graphify_references_transcribe_doc, _claude_skills_graphify_references_update_doc [EXTRACTED 1.00]
- **Context/Cost Efficiency Mechanisms Across Skills** — _ai_skills_deploying_laravel_cloud_skill_subagent_delegation, _claude_skills_graphify_skill_subagent_dispatch_pattern, _claude_skills_graphify_skill_extraction_cache_mechanism [INFERRED 0.75]
- **After-Commit Transaction Safety Pattern** — _claude_skills_laravel_best_practices_rules_events_notifications_shoulddispatchaftercommit, _claude_skills_laravel_best_practices_rules_events_notifications_aftercommit_on_notifications, _claude_skills_laravel_best_practices_rules_mail_aftercommit_mailables_in_transactions [INFERRED 0.85]
- **Secrets Management Pattern** — _claude_skills_laravel_best_practices_rules_config_env_only_in_config_files, _claude_skills_laravel_best_practices_rules_config_encrypted_env_external_secrets, _claude_skills_laravel_best_practices_rules_security_keep_secrets_out_of_code, _claude_skills_laravel_best_practices_rules_security_encrypt_sensitive_database_fields [INFERRED 0.80]
- **Reliable Queue Dispatch Pattern** — _claude_skills_laravel_best_practices_rules_events_notifications_always_queue_notifications, _claude_skills_laravel_best_practices_rules_mail_shouldqueue_mailable_class, _claude_skills_laravel_best_practices_rules_queue_jobs_implement_shouldbeunique [INFERRED 0.75]

## Communities (43 total, 5 thin omitted)

### Community 0 - "Composer Package Metadata"
Cohesion: 0.06
Nodes (35): autoload, autoload-dev, psr-4, psr-4, description, extra, laravel, keywords (+27 more)

### Community 1 - "Advanced Query & Architecture Patterns"
Cohesion: 0.07
Nodes (24): addSelect() Subquery Pattern, Compound Index Matching orderBy Order, Advanced Query Patterns, whereIn + Subquery over whereHas, Atomic Locks (Cache::lock / lockForUpdate), Code to Interfaces, Concurrency::run() Parallel Execution, Context Facade (+16 more)

### Community 2 - "Config & Queue Job Best Practices"
Cohesion: 0.08
Nodes (25): Use App::environment() for Environment Checks, Use Constants and Language Files, Use Encrypted Env or External Secrets, env() Only in Config Files, Configuration Best Practices, Batch Related Jobs, Implement ShouldBeUnique, Rate Limit External API Calls in Jobs (+17 more)

### Community 3 - "Composer Build Scripts"
Cohesion: 0.08
Nodes (26): scripts, dev, post-autoload-dump, post-create-project-cmd, post-root-package-install, post-update-cmd, pre-package-uninstall, setup (+18 more)

### Community 4 - "Database Performance Best Practices"
Cohesion: 0.08
Nodes (25): Chunk Large Datasets, Use cursor() for Memory-Efficient Iteration, Add Database Indexes, Always Eager Load Relationships, No Queries in Blade Templates, Prevent Lazy Loading in Development, Database Performance Best Practices, Select Only Needed Columns (+17 more)

### Community 5 - "Code Style & Testing Conventions"
Cohesion: 0.08
Nodes (25): Follow Laravel Naming Conventions, Use Laravel String & Array Helpers, No Inline JS/CSS in Blade, No Unnecessary Comments, Prefer Shorter Readable Syntax, Conventions & Style, Call Event::fake() After Factory Setup, Use Exceptions::fake() to Assert Exception Reporting (+17 more)

### Community 6 - "Skill Docs & Delegation Patterns"
Cohesion: 0.10
Nodes (21): Checklists for Multi-Step Operations, Laravel Cloud CLI, Deploying with Laravel Cloud CLI (Skill), CLI Flag Combo Convention, Subagent Delegation Pattern, graphify CLAUDE.md Trigger Note, graphify reference: add-watch, graphify reference: exports (+13 more)

### Community 7 - "User Model & Factory"
Cohesion: 0.16
Nodes (10): User, UserFactory, DatabaseSeeder, Illuminate\Database\Console\Seeds\WithoutModelEvents, Illuminate\Database\Eloquent\Factories\Factory, Illuminate\Database\Eloquent\Factories\HasFactory, Illuminate\Database\Seeder, Illuminate\Foundation\Auth\User (+2 more)

### Community 8 - "NPM Frontend Tooling"
Cohesion: 0.11
Nodes (17): concurrently, laravel-vite-plugin, devDependencies, concurrently, laravel-vite-plugin, tailwindcss, @tailwindcss/vite, vite (+9 more)

### Community 9 - "Events, Notifications & Mail Practices"
Cohesion: 0.14
Nodes (15): Use afterCommit() on Notifications in Transactions, Always Queue Notifications, Run event:cache in Production Deploy, Implement HasLocalePreference on Notifiable Models, Use On-Demand Notifications for Non-User Recipients, Rely on Event Discovery, Events & Notifications Best Practices, Route Notification Channels to Dedicated Queues (+7 more)

### Community 10 - "Exception Handling Best Practices"
Cohesion: 0.29
Nodes (6): Add Context to Exception Classes, Exception Reporting and Rendering, Force JSON Error Rendering for API Routes, Error Handling Best Practices, Use ShouldntReport for Exceptions That Should Never Log, Throttle High-Volume Exceptions

### Community 11 - "Task Scheduling Best Practices"
Cohesion: 0.29
Nodes (7): Use environments() to Restrict Tasks, Use onOneServer() on Multi-Server Deployments, Task Scheduling Best Practices, Use runInBackground() for Concurrent Long Tasks, Use Schedule Groups for Shared Configuration, Use takeUntilTimeout() for Time-Bounded Processing, Use withoutOverlapping() on Variable-Duration Tasks

### Community 12 - "Project README & Guidelines"
Cohesion: 0.29
Nodes (7): Laravel Boost Guidelines (Foundation Rules), About Laravel, Agentic Development with Laravel Boost, Contributing Guide, Learning Laravel, Laravel Framework README, Security Vulnerabilities Reporting

### Community 13 - "Composer Plugin Config"
Cohesion: 0.29
Nodes (7): pestphp/pest-plugin, php-http/discovery, config, allow-plugins, optimize-autoloader, preferred-install, sort-packages

### Community 14 - "HTTP Client Best Practices"
Cohesion: 0.33
Nodes (6): Always Set Explicit Timeouts, Fake HTTP Calls in Tests, Handle Errors Explicitly, Use Request Pooling for Concurrent Requests, Use Retry with Backoff for External APIs, HTTP Client Best Practices

### Community 15 - "Routing & Controllers Best Practices"
Cohesion: 0.33
Nodes (6): Use Implicit Route Model Binding, Keep Controllers Thin, Routing & Controllers Best Practices, Use Scoped Bindings for Nested Resources, Type-Hint Form Requests, Use Resource Controllers

### Community 16 - "Validation & Form Requests"
Cohesion: 0.33
Nodes (5): Use the after() Method for Custom Validation, Array vs. String Notation for Rules, Validation & Forms Best Practices, Use Rule::when() for Conditional Validation, Use Form Request Classes

### Community 18 - "Feature Test Scaffold"
Cohesion: 0.40
Nodes (3): Illuminate\Foundation\Testing\TestCase, ExampleTest, TestCase

## Knowledge Gaps
- **90 isolated node(s):** `php`, `Controller`, `$schema`, `name`, `type` (+85 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `scripts` connect `Composer Build Scripts` to `Composer Package Metadata`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **What connects `php`, `Controller`, `$schema` to the rest of the system?**
  _90 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Composer Package Metadata` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._
- **Should `Advanced Query & Architecture Patterns` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `Config & Queue Job Best Practices` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `Composer Build Scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Database Performance Best Practices` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._