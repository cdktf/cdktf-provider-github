// https://www.terraform.io/docs/providers/github/r/branch_protection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#allows_deletions BranchProtection#allows_deletions}
  */
  readonly allowsDeletions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#allows_force_pushes BranchProtection#allows_force_pushes}
  */
  readonly allowsForcePushes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#enforce_admins BranchProtection#enforce_admins}
  */
  readonly enforceAdmins?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#pattern BranchProtection#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#push_restrictions BranchProtection#push_restrictions}
  */
  readonly pushRestrictions?: string[];
  /**
  * Node ID or name of repository
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#repository_id BranchProtection#repository_id}
  */
  readonly repositoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#require_signed_commits BranchProtection#require_signed_commits}
  */
  readonly requireSignedCommits?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#required_linear_history BranchProtection#required_linear_history}
  */
  readonly requiredLinearHistory?: boolean | cdktf.IResolvable;
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
}
export interface BranchProtectionRequiredPullRequestReviews {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#dismiss_stale_reviews BranchProtection#dismiss_stale_reviews}
  */
  readonly dismissStaleReviews?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#dismissal_restrictions BranchProtection#dismissal_restrictions}
  */
  readonly dismissalRestrictions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#require_code_owner_reviews BranchProtection#require_code_owner_reviews}
  */
  readonly requireCodeOwnerReviews?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#required_approving_review_count BranchProtection#required_approving_review_count}
  */
  readonly requiredApprovingReviewCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#restrict_dismissals BranchProtection#restrict_dismissals}
  */
  readonly restrictDismissals?: boolean | cdktf.IResolvable;
}

function branchProtectionRequiredPullRequestReviewsToTerraform(struct?: BranchProtectionRequiredPullRequestReviews): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dismiss_stale_reviews: cdktf.booleanToTerraform(struct!.dismissStaleReviews),
    dismissal_restrictions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dismissalRestrictions),
    require_code_owner_reviews: cdktf.booleanToTerraform(struct!.requireCodeOwnerReviews),
    required_approving_review_count: cdktf.numberToTerraform(struct!.requiredApprovingReviewCount),
    restrict_dismissals: cdktf.booleanToTerraform(struct!.restrictDismissals),
  }
}

export interface BranchProtectionRequiredStatusChecks {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#contexts BranchProtection#contexts}
  */
  readonly contexts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html#strict BranchProtection#strict}
  */
  readonly strict?: boolean | cdktf.IResolvable;
}

function branchProtectionRequiredStatusChecksToTerraform(struct?: BranchProtectionRequiredStatusChecks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contexts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.contexts),
    strict: cdktf.booleanToTerraform(struct!.strict),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/branch_protection.html github_branch_protection}
*/
export class BranchProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_branch_protection";

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
    this._allowsDeletions = config.allowsDeletions;
    this._allowsForcePushes = config.allowsForcePushes;
    this._enforceAdmins = config.enforceAdmins;
    this._pattern = config.pattern;
    this._pushRestrictions = config.pushRestrictions;
    this._repositoryId = config.repositoryId;
    this._requireSignedCommits = config.requireSignedCommits;
    this._requiredLinearHistory = config.requiredLinearHistory;
    this._requiredPullRequestReviews = config.requiredPullRequestReviews;
    this._requiredStatusChecks = config.requiredStatusChecks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allows_deletions - computed: false, optional: true, required: false
  private _allowsDeletions?: boolean | cdktf.IResolvable | undefined; 
  public get allowsDeletions() {
    return this.getBooleanAttribute('allows_deletions') as any;
  }
  public set allowsDeletions(value: boolean | cdktf.IResolvable | undefined) {
    this._allowsDeletions = value;
  }
  public resetAllowsDeletions() {
    this._allowsDeletions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowsDeletionsInput() {
    return this._allowsDeletions
  }

  // allows_force_pushes - computed: false, optional: true, required: false
  private _allowsForcePushes?: boolean | cdktf.IResolvable | undefined; 
  public get allowsForcePushes() {
    return this.getBooleanAttribute('allows_force_pushes') as any;
  }
  public set allowsForcePushes(value: boolean | cdktf.IResolvable | undefined) {
    this._allowsForcePushes = value;
  }
  public resetAllowsForcePushes() {
    this._allowsForcePushes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowsForcePushesInput() {
    return this._allowsForcePushes
  }

  // enforce_admins - computed: false, optional: true, required: false
  private _enforceAdmins?: boolean | cdktf.IResolvable | undefined; 
  public get enforceAdmins() {
    return this.getBooleanAttribute('enforce_admins') as any;
  }
  public set enforceAdmins(value: boolean | cdktf.IResolvable | undefined) {
    this._enforceAdmins = value;
  }
  public resetEnforceAdmins() {
    this._enforceAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceAdminsInput() {
    return this._enforceAdmins
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern
  }

  // push_restrictions - computed: false, optional: true, required: false
  private _pushRestrictions?: string[] | undefined; 
  public get pushRestrictions() {
    return this.getListAttribute('push_restrictions');
  }
  public set pushRestrictions(value: string[] | undefined) {
    this._pushRestrictions = value;
  }
  public resetPushRestrictions() {
    this._pushRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushRestrictionsInput() {
    return this._pushRestrictions
  }

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId
  }

  // require_signed_commits - computed: false, optional: true, required: false
  private _requireSignedCommits?: boolean | cdktf.IResolvable | undefined; 
  public get requireSignedCommits() {
    return this.getBooleanAttribute('require_signed_commits') as any;
  }
  public set requireSignedCommits(value: boolean | cdktf.IResolvable | undefined) {
    this._requireSignedCommits = value;
  }
  public resetRequireSignedCommits() {
    this._requireSignedCommits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSignedCommitsInput() {
    return this._requireSignedCommits
  }

  // required_linear_history - computed: false, optional: true, required: false
  private _requiredLinearHistory?: boolean | cdktf.IResolvable | undefined; 
  public get requiredLinearHistory() {
    return this.getBooleanAttribute('required_linear_history') as any;
  }
  public set requiredLinearHistory(value: boolean | cdktf.IResolvable | undefined) {
    this._requiredLinearHistory = value;
  }
  public resetRequiredLinearHistory() {
    this._requiredLinearHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredLinearHistoryInput() {
    return this._requiredLinearHistory
  }

  // required_pull_request_reviews - computed: false, optional: true, required: false
  private _requiredPullRequestReviews?: BranchProtectionRequiredPullRequestReviews[] | undefined; 
  public get requiredPullRequestReviews() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('required_pull_request_reviews') as any;
  }
  public set requiredPullRequestReviews(value: BranchProtectionRequiredPullRequestReviews[] | undefined) {
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
  private _requiredStatusChecks?: BranchProtectionRequiredStatusChecks[] | undefined; 
  public get requiredStatusChecks() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('required_status_checks') as any;
  }
  public set requiredStatusChecks(value: BranchProtectionRequiredStatusChecks[] | undefined) {
    this._requiredStatusChecks = value;
  }
  public resetRequiredStatusChecks() {
    this._requiredStatusChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredStatusChecksInput() {
    return this._requiredStatusChecks
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allows_deletions: cdktf.booleanToTerraform(this._allowsDeletions),
      allows_force_pushes: cdktf.booleanToTerraform(this._allowsForcePushes),
      enforce_admins: cdktf.booleanToTerraform(this._enforceAdmins),
      pattern: cdktf.stringToTerraform(this._pattern),
      push_restrictions: cdktf.listMapper(cdktf.stringToTerraform)(this._pushRestrictions),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      require_signed_commits: cdktf.booleanToTerraform(this._requireSignedCommits),
      required_linear_history: cdktf.booleanToTerraform(this._requiredLinearHistory),
      required_pull_request_reviews: cdktf.listMapper(branchProtectionRequiredPullRequestReviewsToTerraform)(this._requiredPullRequestReviews),
      required_status_checks: cdktf.listMapper(branchProtectionRequiredStatusChecksToTerraform)(this._requiredStatusChecks),
    };
  }
}
