// https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchProtectionV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#branch BranchProtectionV3#branch}
  */
  readonly branch: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#enforce_admins BranchProtectionV3#enforce_admins}
  */
  readonly enforceAdmins?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#repository BranchProtectionV3#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#require_signed_commits BranchProtectionV3#require_signed_commits}
  */
  readonly requireSignedCommits?: boolean | cdktf.IResolvable;
  /**
  * required_pull_request_reviews block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#required_pull_request_reviews BranchProtectionV3#required_pull_request_reviews}
  */
  readonly requiredPullRequestReviews?: BranchProtectionV3RequiredPullRequestReviews[];
  /**
  * required_status_checks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#required_status_checks BranchProtectionV3#required_status_checks}
  */
  readonly requiredStatusChecks?: BranchProtectionV3RequiredStatusChecks[];
  /**
  * restrictions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#restrictions BranchProtectionV3#restrictions}
  */
  readonly restrictions?: BranchProtectionV3Restrictions[];
}
export interface BranchProtectionV3RequiredPullRequestReviews {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#dismiss_stale_reviews BranchProtectionV3#dismiss_stale_reviews}
  */
  readonly dismissStaleReviews?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#dismissal_teams BranchProtectionV3#dismissal_teams}
  */
  readonly dismissalTeams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#dismissal_users BranchProtectionV3#dismissal_users}
  */
  readonly dismissalUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#include_admins BranchProtectionV3#include_admins}
  */
  readonly includeAdmins?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#require_code_owner_reviews BranchProtectionV3#require_code_owner_reviews}
  */
  readonly requireCodeOwnerReviews?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#required_approving_review_count BranchProtectionV3#required_approving_review_count}
  */
  readonly requiredApprovingReviewCount?: number;
}

function branchProtectionV3RequiredPullRequestReviewsToTerraform(struct?: BranchProtectionV3RequiredPullRequestReviews): any {
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

export interface BranchProtectionV3RequiredStatusChecks {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#contexts BranchProtectionV3#contexts}
  */
  readonly contexts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#include_admins BranchProtectionV3#include_admins}
  */
  readonly includeAdmins?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#strict BranchProtectionV3#strict}
  */
  readonly strict?: boolean | cdktf.IResolvable;
}

function branchProtectionV3RequiredStatusChecksToTerraform(struct?: BranchProtectionV3RequiredStatusChecks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    contexts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.contexts),
    include_admins: cdktf.booleanToTerraform(struct!.includeAdmins),
    strict: cdktf.booleanToTerraform(struct!.strict),
  }
}

export interface BranchProtectionV3Restrictions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#apps BranchProtectionV3#apps}
  */
  readonly apps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#teams BranchProtectionV3#teams}
  */
  readonly teams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html#users BranchProtectionV3#users}
  */
  readonly users?: string[];
}

function branchProtectionV3RestrictionsToTerraform(struct?: BranchProtectionV3Restrictions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    apps: cdktf.listMapper(cdktf.stringToTerraform)(struct!.apps),
    teams: cdktf.listMapper(cdktf.stringToTerraform)(struct!.teams),
    users: cdktf.listMapper(cdktf.stringToTerraform)(struct!.users),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html github_branch_protection_v3}
*/
export class BranchProtectionV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_branch_protection_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3.html github_branch_protection_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BranchProtectionV3Config
  */
  public constructor(scope: Construct, id: string, config: BranchProtectionV3Config) {
    super(scope, id, {
      terraformResourceType: 'github_branch_protection_v3',
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
  private _enforceAdmins?: boolean | cdktf.IResolvable;
  public get enforceAdmins() {
    return this.getBooleanAttribute('enforce_admins');
  }
  public set enforceAdmins(value: boolean | cdktf.IResolvable ) {
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
  private _requireSignedCommits?: boolean | cdktf.IResolvable;
  public get requireSignedCommits() {
    return this.getBooleanAttribute('require_signed_commits');
  }
  public set requireSignedCommits(value: boolean | cdktf.IResolvable ) {
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
  private _requiredPullRequestReviews?: BranchProtectionV3RequiredPullRequestReviews[];
  public get requiredPullRequestReviews() {
    return this.interpolationForAttribute('required_pull_request_reviews') as any;
  }
  public set requiredPullRequestReviews(value: BranchProtectionV3RequiredPullRequestReviews[] ) {
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
  private _requiredStatusChecks?: BranchProtectionV3RequiredStatusChecks[];
  public get requiredStatusChecks() {
    return this.interpolationForAttribute('required_status_checks') as any;
  }
  public set requiredStatusChecks(value: BranchProtectionV3RequiredStatusChecks[] ) {
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
  private _restrictions?: BranchProtectionV3Restrictions[];
  public get restrictions() {
    return this.interpolationForAttribute('restrictions') as any;
  }
  public set restrictions(value: BranchProtectionV3Restrictions[] ) {
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
      required_pull_request_reviews: cdktf.listMapper(branchProtectionV3RequiredPullRequestReviewsToTerraform)(this._requiredPullRequestReviews),
      required_status_checks: cdktf.listMapper(branchProtectionV3RequiredStatusChecksToTerraform)(this._requiredStatusChecks),
      restrictions: cdktf.listMapper(branchProtectionV3RestrictionsToTerraform)(this._restrictions),
    };
  }
}
