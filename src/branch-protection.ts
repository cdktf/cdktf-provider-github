// https://www.terraform.io/docs/providers/github/r/branch_protection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#branch BranchProtection#branch}
  */
  readonly branch: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#enforce_admins BranchProtection#enforce_admins}
  */
  readonly enforceAdmins?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#repository BranchProtection#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#require_signed_commits BranchProtection#require_signed_commits}
  */
  readonly requireSignedCommits?: boolean;
  /**
  * required_pull_request_reviews block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#required_pull_request_reviews BranchProtection#required_pull_request_reviews}
  */
  readonly requiredPullRequestReviews?: BranchProtectionRequiredPullRequestReviews[];
  /**
  * required_status_checks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#required_status_checks BranchProtection#required_status_checks}
  */
  readonly requiredStatusChecks?: BranchProtectionRequiredStatusChecks[];
  /**
  * restrictions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#restrictions BranchProtection#restrictions}
  */
  readonly restrictions?: BranchProtectionRestrictions[];
}
export interface BranchProtectionRequiredPullRequestReviews {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#dismiss_stale_reviews BranchProtection#dismiss_stale_reviews}
  */
  readonly dismissStaleReviews?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#dismissal_teams BranchProtection#dismissal_teams}
  */
  readonly dismissalTeams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#dismissal_users BranchProtection#dismissal_users}
  */
  readonly dismissalUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#include_admins BranchProtection#include_admins}
  */
  readonly includeAdmins?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#require_code_owner_reviews BranchProtection#require_code_owner_reviews}
  */
  readonly requireCodeOwnerReviews?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#required_approving_review_count BranchProtection#required_approving_review_count}
  */
  readonly requiredApprovingReviewCount?: number;
}

function branchProtectionRequiredPullRequestReviewsToTerraform(struct?: BranchProtectionRequiredPullRequestReviews): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dismiss_stale_reviews: cdktf.booleanToTerraform(struct!.dismissStaleReviews),
    dismissal_teams: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dismissalTeams),
    dismissal_users: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dismissalUsers),
    include_admins: cdktf.booleanToTerraform(struct!.includeAdmins),
    require_code_owner_reviews: cdktf.booleanToTerraform(struct!.requireCodeOwnerReviews),
    required_approving_review_count: cdktf.numberToTerraform(struct!.requiredApprovingReviewCount),
  }
}

export interface BranchProtectionRequiredStatusChecks {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#contexts BranchProtection#contexts}
  */
  readonly contexts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#include_admins BranchProtection#include_admins}
  */
  readonly includeAdmins?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#strict BranchProtection#strict}
  */
  readonly strict?: boolean;
}

function branchProtectionRequiredStatusChecksToTerraform(struct?: BranchProtectionRequiredStatusChecks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    contexts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.contexts),
    include_admins: cdktf.booleanToTerraform(struct!.includeAdmins),
    strict: cdktf.booleanToTerraform(struct!.strict),
  }
}

export interface BranchProtectionRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#apps BranchProtection#apps}
  */
  readonly apps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#teams BranchProtection#teams}
  */
  readonly teams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#users BranchProtection#users}
  */
  readonly users?: string[];
}

function branchProtectionRestrictionsToTerraform(struct?: BranchProtectionRestrictions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    apps: cdktf.listMapper(cdktf.stringToTerraform)(struct!.apps),
    teams: cdktf.listMapper(cdktf.stringToTerraform)(struct!.teams),
    users: cdktf.listMapper(cdktf.stringToTerraform)(struct!.users),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html github_branch_protection}
*/
export class BranchProtection extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html github_branch_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BranchProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: BranchProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'github_branch_protection',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._branch = config.branch;
    this._enforceAdmins = config.enforceAdmins;
    this._repository = config.repository;
    this._requireSignedCommits = config.requireSignedCommits;
    this._requiredPullRequestReviews = config.requiredPullRequestReviews;
    this._requiredStatusChecks = config.requiredStatusChecks;
    this._restrictions = config.restrictions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: false, optional: false, required: true
  private _branch: string;
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch
  }

  // enforce_admins - computed: false, optional: true, required: false
  private _enforceAdmins?: boolean;
  public get enforceAdmins() {
    return this.getBooleanAttribute('enforce_admins');
  }
  public set enforceAdmins(value: boolean ) {
    this._enforceAdmins = value;
  }
  public resetEnforceAdmins() {
    this._enforceAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceAdminsInput() {
    return this._enforceAdmins
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository
  }

  // require_signed_commits - computed: false, optional: true, required: false
  private _requireSignedCommits?: boolean;
  public get requireSignedCommits() {
    return this.getBooleanAttribute('require_signed_commits');
  }
  public set requireSignedCommits(value: boolean ) {
    this._requireSignedCommits = value;
  }
  public resetRequireSignedCommits() {
    this._requireSignedCommits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSignedCommitsInput() {
    return this._requireSignedCommits
  }

  // required_pull_request_reviews - computed: false, optional: true, required: false
  private _requiredPullRequestReviews?: BranchProtectionRequiredPullRequestReviews[];
  public get requiredPullRequestReviews() {
    return this.interpolationForAttribute('required_pull_request_reviews') as any;
  }
  public set requiredPullRequestReviews(value: BranchProtectionRequiredPullRequestReviews[] ) {
    this._requiredPullRequestReviews = value;
  }
  public resetRequiredPullRequestReviews() {
    this._requiredPullRequestReviews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredPullRequestReviewsInput() {
    return this._requiredPullRequestReviews
  }

  // required_status_checks - computed: false, optional: true, required: false
  private _requiredStatusChecks?: BranchProtectionRequiredStatusChecks[];
  public get requiredStatusChecks() {
    return this.interpolationForAttribute('required_status_checks') as any;
  }
  public set requiredStatusChecks(value: BranchProtectionRequiredStatusChecks[] ) {
    this._requiredStatusChecks = value;
  }
  public resetRequiredStatusChecks() {
    this._requiredStatusChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredStatusChecksInput() {
    return this._requiredStatusChecks
  }

  // restrictions - computed: false, optional: true, required: false
  private _restrictions?: BranchProtectionRestrictions[];
  public get restrictions() {
    return this.interpolationForAttribute('restrictions') as any;
  }
  public set restrictions(value: BranchProtectionRestrictions[] ) {
    this._restrictions = value;
  }
  public resetRestrictions() {
    this._restrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: cdktf.stringToTerraform(this._branch),
      enforce_admins: cdktf.booleanToTerraform(this._enforceAdmins),
      repository: cdktf.stringToTerraform(this._repository),
      require_signed_commits: cdktf.booleanToTerraform(this._requireSignedCommits),
      required_pull_request_reviews: cdktf.listMapper(branchProtectionRequiredPullRequestReviewsToTerraform)(this._requiredPullRequestReviews),
      required_status_checks: cdktf.listMapper(branchProtectionRequiredStatusChecksToTerraform)(this._requiredStatusChecks),
      restrictions: cdktf.listMapper(branchProtectionRestrictionsToTerraform)(this._restrictions),
    };
  }
}
