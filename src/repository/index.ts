/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set to 'true' to allow auto-merging pull requests on the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#allow_auto_merge Repository#allow_auto_merge}
  */
  readonly allowAutoMerge?: boolean | cdktf.IResolvable;
  /**
  * Set to 'false' to disable merge commits on the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#allow_merge_commit Repository#allow_merge_commit}
  */
  readonly allowMergeCommit?: boolean | cdktf.IResolvable;
  /**
  * Set to 'false' to disable rebase merges on the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#allow_rebase_merge Repository#allow_rebase_merge}
  */
  readonly allowRebaseMerge?: boolean | cdktf.IResolvable;
  /**
  * Set to 'false' to disable squash merges on the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#allow_squash_merge Repository#allow_squash_merge}
  */
  readonly allowSquashMerge?: boolean | cdktf.IResolvable;
  /**
  *  Set to 'true' to always suggest updating pull request branches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#allow_update_branch Repository#allow_update_branch}
  */
  readonly allowUpdateBranch?: boolean | cdktf.IResolvable;
  /**
  * Set to 'true' to archive the repository instead of deleting on destroy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#archive_on_destroy Repository#archive_on_destroy}
  */
  readonly archiveOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Specifies if the repository should be archived. Defaults to 'false'. NOTE Currently, the API does not support unarchiving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#archived Repository#archived}
  */
  readonly archived?: boolean | cdktf.IResolvable;
  /**
  * Set to 'true' to produce an initial commit in the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#auto_init Repository#auto_init}
  */
  readonly autoInit?: boolean | cdktf.IResolvable;
  /**
  * Can only be set after initial repository creation, and only if the target branch exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#default_branch Repository#default_branch}
  */
  readonly defaultBranch?: string;
  /**
  * Automatically delete head branch after a pull request is merged. Defaults to 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#delete_branch_on_merge Repository#delete_branch_on_merge}
  */
  readonly deleteBranchOnMerge?: boolean | cdktf.IResolvable;
  /**
  * A description of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#description Repository#description}
  */
  readonly description?: string;
  /**
  * Use the name of the template without the extension. For example, 'Haskell'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#gitignore_template Repository#gitignore_template}
  */
  readonly gitignoreTemplate?: string;
  /**
  * Set to 'true' to enable GitHub Discussions on the repository. Defaults to 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#has_discussions Repository#has_discussions}
  */
  readonly hasDiscussions?: boolean | cdktf.IResolvable;
  /**
  * Set to 'true' to enable the (deprecated) downloads features on the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#has_downloads Repository#has_downloads}
  */
  readonly hasDownloads?: boolean | cdktf.IResolvable;
  /**
  * Set to 'true' to enable the GitHub Issues features on the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#has_issues Repository#has_issues}
  */
  readonly hasIssues?: boolean | cdktf.IResolvable;
  /**
  * Set to 'true' to enable the GitHub Projects features on the repository. Per the GitHub documentation when in an organization that has disabled repository projects it will default to 'false' and will otherwise default to 'true'. If you specify 'true' when it has been disabled it will return an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#has_projects Repository#has_projects}
  */
  readonly hasProjects?: boolean | cdktf.IResolvable;
  /**
  * Set to 'true' to enable the GitHub Wiki features on the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#has_wiki Repository#has_wiki}
  */
  readonly hasWiki?: boolean | cdktf.IResolvable;
  /**
  * URL of a page describing the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#homepage_url Repository#homepage_url}
  */
  readonly homepageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#id Repository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set to true to not call the vulnerability alerts endpoint so the resource can also be used without admin permissions during read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#ignore_vulnerability_alerts_during_read Repository#ignore_vulnerability_alerts_during_read}
  */
  readonly ignoreVulnerabilityAlertsDuringRead?: boolean | cdktf.IResolvable;
  /**
  * Set to 'true' to tell GitHub that this is a template repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#is_template Repository#is_template}
  */
  readonly isTemplate?: boolean | cdktf.IResolvable;
  /**
  * Use the name of the template without the extension. For example, 'mit' or 'mpl-2.0'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#license_template Repository#license_template}
  */
  readonly licenseTemplate?: string;
  /**
  * Can be 'PR_BODY', 'PR_TITLE', or 'BLANK' for a default merge commit message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#merge_commit_message Repository#merge_commit_message}
  */
  readonly mergeCommitMessage?: string;
  /**
  * Can be 'PR_TITLE' or 'MERGE_MESSAGE' for a default merge commit title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#merge_commit_title Repository#merge_commit_title}
  */
  readonly mergeCommitTitle?: string;
  /**
  * The name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#name Repository#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#private Repository#private}
  */
  readonly private?: boolean | cdktf.IResolvable;
  /**
  * Can be 'PR_BODY', 'COMMIT_MESSAGES', or 'BLANK' for a default squash merge commit message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#squash_merge_commit_message Repository#squash_merge_commit_message}
  */
  readonly squashMergeCommitMessage?: string;
  /**
  * Can be 'PR_TITLE' or 'COMMIT_OR_PR_TITLE' for a default squash merge commit title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#squash_merge_commit_title Repository#squash_merge_commit_title}
  */
  readonly squashMergeCommitTitle?: string;
  /**
  * The list of topics of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#topics Repository#topics}
  */
  readonly topics?: string[];
  /**
  * Can be 'public' or 'private'. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, visibility can also be 'internal'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#visibility Repository#visibility}
  */
  readonly visibility?: string;
  /**
  * Set to 'true' to enable security alerts for vulnerable dependencies. Enabling requires alerts to be enabled on the owner level. (Note for importing: GitHub enables the alerts on public repos but disables them on private repos by default). Note that vulnerability alerts have not been successfully tested on any GitHub Enterprise instance and may be unavailable in those settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#vulnerability_alerts Repository#vulnerability_alerts}
  */
  readonly vulnerabilityAlerts?: boolean | cdktf.IResolvable;
  /**
  * Require contributors to sign off on web-based commits. Defaults to 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#web_commit_signoff_required Repository#web_commit_signoff_required}
  */
  readonly webCommitSignoffRequired?: boolean | cdktf.IResolvable;
  /**
  * pages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#pages Repository#pages}
  */
  readonly pages?: RepositoryPages;
  /**
  * security_and_analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#security_and_analysis Repository#security_and_analysis}
  */
  readonly securityAndAnalysis?: RepositorySecurityAndAnalysis;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#template Repository#template}
  */
  readonly template?: RepositoryTemplate;
}
export interface RepositoryPagesSource {
  /**
  * The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#branch Repository#branch}
  */
  readonly branch: string;
  /**
  * The repository directory from which the site publishes (Default: '/')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#path Repository#path}
  */
  readonly path?: string;
}

export function repositoryPagesSourceToTerraform(struct?: RepositoryPagesSourceOutputReference | RepositoryPagesSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function repositoryPagesSourceToHclTerraform(struct?: RepositoryPagesSourceOutputReference | RepositoryPagesSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryPagesSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryPagesSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryPagesSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._path = value.path;
    }
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface RepositoryPages {
  /**
  * The type the page should be sourced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#build_type Repository#build_type}
  */
  readonly buildType?: string;
  /**
  * The custom domain for the repository. This can only be set after the repository has been created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#cname Repository#cname}
  */
  readonly cname?: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#source Repository#source}
  */
  readonly source?: RepositoryPagesSource;
}

export function repositoryPagesToTerraform(struct?: RepositoryPagesOutputReference | RepositoryPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_type: cdktf.stringToTerraform(struct!.buildType),
    cname: cdktf.stringToTerraform(struct!.cname),
    source: repositoryPagesSourceToTerraform(struct!.source),
  }
}


export function repositoryPagesToHclTerraform(struct?: RepositoryPagesOutputReference | RepositoryPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_type: {
      value: cdktf.stringToHclTerraform(struct!.buildType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cname: {
      value: cdktf.stringToHclTerraform(struct!.cname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: repositoryPagesSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "RepositoryPagesSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryPagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryPages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildType !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildType = this._buildType;
    }
    if (this._cname !== undefined) {
      hasAnyValues = true;
      internalValueResult.cname = this._cname;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryPages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buildType = undefined;
      this._cname = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buildType = value.buildType;
      this._cname = value.cname;
      this._source.internalValue = value.source;
    }
  }

  // build_type - computed: false, optional: true, required: false
  private _buildType?: string; 
  public get buildType() {
    return this.getStringAttribute('build_type');
  }
  public set buildType(value: string) {
    this._buildType = value;
  }
  public resetBuildType() {
    this._buildType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildTypeInput() {
    return this._buildType;
  }

  // cname - computed: false, optional: true, required: false
  private _cname?: string; 
  public get cname() {
    return this.getStringAttribute('cname');
  }
  public set cname(value: string) {
    this._cname = value;
  }
  public resetCname() {
    this._cname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname;
  }

  // custom_404 - computed: true, optional: false, required: false
  public get custom404() {
    return this.getBooleanAttribute('custom_404');
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // source - computed: false, optional: true, required: false
  private _source = new RepositoryPagesSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: RepositoryPagesSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface RepositorySecurityAndAnalysisAdvancedSecurity {
  /**
  * Set to 'enabled' to enable advanced security features on the repository. Can be 'enabled' or 'disabled'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#status Repository#status}
  */
  readonly status: string;
}

export function repositorySecurityAndAnalysisAdvancedSecurityToTerraform(struct?: RepositorySecurityAndAnalysisAdvancedSecurityOutputReference | RepositorySecurityAndAnalysisAdvancedSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function repositorySecurityAndAnalysisAdvancedSecurityToHclTerraform(struct?: RepositorySecurityAndAnalysisAdvancedSecurityOutputReference | RepositorySecurityAndAnalysisAdvancedSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositorySecurityAndAnalysisAdvancedSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositorySecurityAndAnalysisAdvancedSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositorySecurityAndAnalysisAdvancedSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface RepositorySecurityAndAnalysisSecretScanning {
  /**
  * Set to 'enabled' to enable secret scanning on the repository. Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public' or 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#status Repository#status}
  */
  readonly status: string;
}

export function repositorySecurityAndAnalysisSecretScanningToTerraform(struct?: RepositorySecurityAndAnalysisSecretScanningOutputReference | RepositorySecurityAndAnalysisSecretScanning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function repositorySecurityAndAnalysisSecretScanningToHclTerraform(struct?: RepositorySecurityAndAnalysisSecretScanningOutputReference | RepositorySecurityAndAnalysisSecretScanning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositorySecurityAndAnalysisSecretScanningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositorySecurityAndAnalysisSecretScanning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositorySecurityAndAnalysisSecretScanning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface RepositorySecurityAndAnalysisSecretScanningPushProtection {
  /**
  * Set to 'enabled' to enable secret scanning push protection on the repository. Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public' or 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#status Repository#status}
  */
  readonly status: string;
}

export function repositorySecurityAndAnalysisSecretScanningPushProtectionToTerraform(struct?: RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference | RepositorySecurityAndAnalysisSecretScanningPushProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function repositorySecurityAndAnalysisSecretScanningPushProtectionToHclTerraform(struct?: RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference | RepositorySecurityAndAnalysisSecretScanningPushProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositorySecurityAndAnalysisSecretScanningPushProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositorySecurityAndAnalysisSecretScanningPushProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface RepositorySecurityAndAnalysis {
  /**
  * advanced_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#advanced_security Repository#advanced_security}
  */
  readonly advancedSecurity?: RepositorySecurityAndAnalysisAdvancedSecurity;
  /**
  * secret_scanning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#secret_scanning Repository#secret_scanning}
  */
  readonly secretScanning?: RepositorySecurityAndAnalysisSecretScanning;
  /**
  * secret_scanning_push_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#secret_scanning_push_protection Repository#secret_scanning_push_protection}
  */
  readonly secretScanningPushProtection?: RepositorySecurityAndAnalysisSecretScanningPushProtection;
}

export function repositorySecurityAndAnalysisToTerraform(struct?: RepositorySecurityAndAnalysisOutputReference | RepositorySecurityAndAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_security: repositorySecurityAndAnalysisAdvancedSecurityToTerraform(struct!.advancedSecurity),
    secret_scanning: repositorySecurityAndAnalysisSecretScanningToTerraform(struct!.secretScanning),
    secret_scanning_push_protection: repositorySecurityAndAnalysisSecretScanningPushProtectionToTerraform(struct!.secretScanningPushProtection),
  }
}


export function repositorySecurityAndAnalysisToHclTerraform(struct?: RepositorySecurityAndAnalysisOutputReference | RepositorySecurityAndAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_security: {
      value: repositorySecurityAndAnalysisAdvancedSecurityToHclTerraform(struct!.advancedSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "RepositorySecurityAndAnalysisAdvancedSecurityList",
    },
    secret_scanning: {
      value: repositorySecurityAndAnalysisSecretScanningToHclTerraform(struct!.secretScanning),
      isBlock: true,
      type: "list",
      storageClassType: "RepositorySecurityAndAnalysisSecretScanningList",
    },
    secret_scanning_push_protection: {
      value: repositorySecurityAndAnalysisSecretScanningPushProtectionToHclTerraform(struct!.secretScanningPushProtection),
      isBlock: true,
      type: "list",
      storageClassType: "RepositorySecurityAndAnalysisSecretScanningPushProtectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositorySecurityAndAnalysisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositorySecurityAndAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedSecurity = this._advancedSecurity?.internalValue;
    }
    if (this._secretScanning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretScanning = this._secretScanning?.internalValue;
    }
    if (this._secretScanningPushProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretScanningPushProtection = this._secretScanningPushProtection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositorySecurityAndAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advancedSecurity.internalValue = undefined;
      this._secretScanning.internalValue = undefined;
      this._secretScanningPushProtection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advancedSecurity.internalValue = value.advancedSecurity;
      this._secretScanning.internalValue = value.secretScanning;
      this._secretScanningPushProtection.internalValue = value.secretScanningPushProtection;
    }
  }

  // advanced_security - computed: false, optional: true, required: false
  private _advancedSecurity = new RepositorySecurityAndAnalysisAdvancedSecurityOutputReference(this, "advanced_security");
  public get advancedSecurity() {
    return this._advancedSecurity;
  }
  public putAdvancedSecurity(value: RepositorySecurityAndAnalysisAdvancedSecurity) {
    this._advancedSecurity.internalValue = value;
  }
  public resetAdvancedSecurity() {
    this._advancedSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSecurityInput() {
    return this._advancedSecurity.internalValue;
  }

  // secret_scanning - computed: false, optional: true, required: false
  private _secretScanning = new RepositorySecurityAndAnalysisSecretScanningOutputReference(this, "secret_scanning");
  public get secretScanning() {
    return this._secretScanning;
  }
  public putSecretScanning(value: RepositorySecurityAndAnalysisSecretScanning) {
    this._secretScanning.internalValue = value;
  }
  public resetSecretScanning() {
    this._secretScanning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretScanningInput() {
    return this._secretScanning.internalValue;
  }

  // secret_scanning_push_protection - computed: false, optional: true, required: false
  private _secretScanningPushProtection = new RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference(this, "secret_scanning_push_protection");
  public get secretScanningPushProtection() {
    return this._secretScanningPushProtection;
  }
  public putSecretScanningPushProtection(value: RepositorySecurityAndAnalysisSecretScanningPushProtection) {
    this._secretScanningPushProtection.internalValue = value;
  }
  public resetSecretScanningPushProtection() {
    this._secretScanningPushProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretScanningPushProtectionInput() {
    return this._secretScanningPushProtection.internalValue;
  }
}
export interface RepositoryTemplate {
  /**
  * Whether the new repository should include all the branches from the template repository (defaults to 'false', which includes only the default branch from the template).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#include_all_branches Repository#include_all_branches}
  */
  readonly includeAllBranches?: boolean | cdktf.IResolvable;
  /**
  * The GitHub organization or user the template repository is owned by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#owner Repository#owner}
  */
  readonly owner: string;
  /**
  * The name of the template repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#repository Repository#repository}
  */
  readonly repository: string;
}

export function repositoryTemplateToTerraform(struct?: RepositoryTemplateOutputReference | RepositoryTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_all_branches: cdktf.booleanToTerraform(struct!.includeAllBranches),
    owner: cdktf.stringToTerraform(struct!.owner),
    repository: cdktf.stringToTerraform(struct!.repository),
  }
}


export function repositoryTemplateToHclTerraform(struct?: RepositoryTemplateOutputReference | RepositoryTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_all_branches: {
      value: cdktf.booleanToHclTerraform(struct!.includeAllBranches),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeAllBranches !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAllBranches = this._includeAllBranches;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeAllBranches = undefined;
      this._owner = undefined;
      this._repository = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeAllBranches = value.includeAllBranches;
      this._owner = value.owner;
      this._repository = value.repository;
    }
  }

  // include_all_branches - computed: false, optional: true, required: false
  private _includeAllBranches?: boolean | cdktf.IResolvable; 
  public get includeAllBranches() {
    return this.getBooleanAttribute('include_all_branches');
  }
  public set includeAllBranches(value: boolean | cdktf.IResolvable) {
    this._includeAllBranches = value;
  }
  public resetIncludeAllBranches() {
    this._includeAllBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllBranchesInput() {
    return this._includeAllBranches;
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository github_repository}
*/
export class Repository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Repository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Repository to import
  * @param importFromId The id of the existing Repository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Repository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository github_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.3.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAutoMerge = config.allowAutoMerge;
    this._allowMergeCommit = config.allowMergeCommit;
    this._allowRebaseMerge = config.allowRebaseMerge;
    this._allowSquashMerge = config.allowSquashMerge;
    this._allowUpdateBranch = config.allowUpdateBranch;
    this._archiveOnDestroy = config.archiveOnDestroy;
    this._archived = config.archived;
    this._autoInit = config.autoInit;
    this._defaultBranch = config.defaultBranch;
    this._deleteBranchOnMerge = config.deleteBranchOnMerge;
    this._description = config.description;
    this._gitignoreTemplate = config.gitignoreTemplate;
    this._hasDiscussions = config.hasDiscussions;
    this._hasDownloads = config.hasDownloads;
    this._hasIssues = config.hasIssues;
    this._hasProjects = config.hasProjects;
    this._hasWiki = config.hasWiki;
    this._homepageUrl = config.homepageUrl;
    this._id = config.id;
    this._ignoreVulnerabilityAlertsDuringRead = config.ignoreVulnerabilityAlertsDuringRead;
    this._isTemplate = config.isTemplate;
    this._licenseTemplate = config.licenseTemplate;
    this._mergeCommitMessage = config.mergeCommitMessage;
    this._mergeCommitTitle = config.mergeCommitTitle;
    this._name = config.name;
    this._private = config.private;
    this._squashMergeCommitMessage = config.squashMergeCommitMessage;
    this._squashMergeCommitTitle = config.squashMergeCommitTitle;
    this._topics = config.topics;
    this._visibility = config.visibility;
    this._vulnerabilityAlerts = config.vulnerabilityAlerts;
    this._webCommitSignoffRequired = config.webCommitSignoffRequired;
    this._pages.internalValue = config.pages;
    this._securityAndAnalysis.internalValue = config.securityAndAnalysis;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_auto_merge - computed: false, optional: true, required: false
  private _allowAutoMerge?: boolean | cdktf.IResolvable; 
  public get allowAutoMerge() {
    return this.getBooleanAttribute('allow_auto_merge');
  }
  public set allowAutoMerge(value: boolean | cdktf.IResolvable) {
    this._allowAutoMerge = value;
  }
  public resetAllowAutoMerge() {
    this._allowAutoMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAutoMergeInput() {
    return this._allowAutoMerge;
  }

  // allow_merge_commit - computed: false, optional: true, required: false
  private _allowMergeCommit?: boolean | cdktf.IResolvable; 
  public get allowMergeCommit() {
    return this.getBooleanAttribute('allow_merge_commit');
  }
  public set allowMergeCommit(value: boolean | cdktf.IResolvable) {
    this._allowMergeCommit = value;
  }
  public resetAllowMergeCommit() {
    this._allowMergeCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMergeCommitInput() {
    return this._allowMergeCommit;
  }

  // allow_rebase_merge - computed: false, optional: true, required: false
  private _allowRebaseMerge?: boolean | cdktf.IResolvable; 
  public get allowRebaseMerge() {
    return this.getBooleanAttribute('allow_rebase_merge');
  }
  public set allowRebaseMerge(value: boolean | cdktf.IResolvable) {
    this._allowRebaseMerge = value;
  }
  public resetAllowRebaseMerge() {
    this._allowRebaseMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRebaseMergeInput() {
    return this._allowRebaseMerge;
  }

  // allow_squash_merge - computed: false, optional: true, required: false
  private _allowSquashMerge?: boolean | cdktf.IResolvable; 
  public get allowSquashMerge() {
    return this.getBooleanAttribute('allow_squash_merge');
  }
  public set allowSquashMerge(value: boolean | cdktf.IResolvable) {
    this._allowSquashMerge = value;
  }
  public resetAllowSquashMerge() {
    this._allowSquashMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSquashMergeInput() {
    return this._allowSquashMerge;
  }

  // allow_update_branch - computed: false, optional: true, required: false
  private _allowUpdateBranch?: boolean | cdktf.IResolvable; 
  public get allowUpdateBranch() {
    return this.getBooleanAttribute('allow_update_branch');
  }
  public set allowUpdateBranch(value: boolean | cdktf.IResolvable) {
    this._allowUpdateBranch = value;
  }
  public resetAllowUpdateBranch() {
    this._allowUpdateBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUpdateBranchInput() {
    return this._allowUpdateBranch;
  }

  // archive_on_destroy - computed: false, optional: true, required: false
  private _archiveOnDestroy?: boolean | cdktf.IResolvable; 
  public get archiveOnDestroy() {
    return this.getBooleanAttribute('archive_on_destroy');
  }
  public set archiveOnDestroy(value: boolean | cdktf.IResolvable) {
    this._archiveOnDestroy = value;
  }
  public resetArchiveOnDestroy() {
    this._archiveOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveOnDestroyInput() {
    return this._archiveOnDestroy;
  }

  // archived - computed: false, optional: true, required: false
  private _archived?: boolean | cdktf.IResolvable; 
  public get archived() {
    return this.getBooleanAttribute('archived');
  }
  public set archived(value: boolean | cdktf.IResolvable) {
    this._archived = value;
  }
  public resetArchived() {
    this._archived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivedInput() {
    return this._archived;
  }

  // auto_init - computed: false, optional: true, required: false
  private _autoInit?: boolean | cdktf.IResolvable; 
  public get autoInit() {
    return this.getBooleanAttribute('auto_init');
  }
  public set autoInit(value: boolean | cdktf.IResolvable) {
    this._autoInit = value;
  }
  public resetAutoInit() {
    this._autoInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInitInput() {
    return this._autoInit;
  }

  // default_branch - computed: true, optional: true, required: false
  private _defaultBranch?: string; 
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }
  public set defaultBranch(value: string) {
    this._defaultBranch = value;
  }
  public resetDefaultBranch() {
    this._defaultBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch;
  }

  // delete_branch_on_merge - computed: false, optional: true, required: false
  private _deleteBranchOnMerge?: boolean | cdktf.IResolvable; 
  public get deleteBranchOnMerge() {
    return this.getBooleanAttribute('delete_branch_on_merge');
  }
  public set deleteBranchOnMerge(value: boolean | cdktf.IResolvable) {
    this._deleteBranchOnMerge = value;
  }
  public resetDeleteBranchOnMerge() {
    this._deleteBranchOnMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteBranchOnMergeInput() {
    return this._deleteBranchOnMerge;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // git_clone_url - computed: true, optional: false, required: false
  public get gitCloneUrl() {
    return this.getStringAttribute('git_clone_url');
  }

  // gitignore_template - computed: false, optional: true, required: false
  private _gitignoreTemplate?: string; 
  public get gitignoreTemplate() {
    return this.getStringAttribute('gitignore_template');
  }
  public set gitignoreTemplate(value: string) {
    this._gitignoreTemplate = value;
  }
  public resetGitignoreTemplate() {
    this._gitignoreTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitignoreTemplateInput() {
    return this._gitignoreTemplate;
  }

  // has_discussions - computed: false, optional: true, required: false
  private _hasDiscussions?: boolean | cdktf.IResolvable; 
  public get hasDiscussions() {
    return this.getBooleanAttribute('has_discussions');
  }
  public set hasDiscussions(value: boolean | cdktf.IResolvable) {
    this._hasDiscussions = value;
  }
  public resetHasDiscussions() {
    this._hasDiscussions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasDiscussionsInput() {
    return this._hasDiscussions;
  }

  // has_downloads - computed: false, optional: true, required: false
  private _hasDownloads?: boolean | cdktf.IResolvable; 
  public get hasDownloads() {
    return this.getBooleanAttribute('has_downloads');
  }
  public set hasDownloads(value: boolean | cdktf.IResolvable) {
    this._hasDownloads = value;
  }
  public resetHasDownloads() {
    this._hasDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasDownloadsInput() {
    return this._hasDownloads;
  }

  // has_issues - computed: false, optional: true, required: false
  private _hasIssues?: boolean | cdktf.IResolvable; 
  public get hasIssues() {
    return this.getBooleanAttribute('has_issues');
  }
  public set hasIssues(value: boolean | cdktf.IResolvable) {
    this._hasIssues = value;
  }
  public resetHasIssues() {
    this._hasIssues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasIssuesInput() {
    return this._hasIssues;
  }

  // has_projects - computed: false, optional: true, required: false
  private _hasProjects?: boolean | cdktf.IResolvable; 
  public get hasProjects() {
    return this.getBooleanAttribute('has_projects');
  }
  public set hasProjects(value: boolean | cdktf.IResolvable) {
    this._hasProjects = value;
  }
  public resetHasProjects() {
    this._hasProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasProjectsInput() {
    return this._hasProjects;
  }

  // has_wiki - computed: false, optional: true, required: false
  private _hasWiki?: boolean | cdktf.IResolvable; 
  public get hasWiki() {
    return this.getBooleanAttribute('has_wiki');
  }
  public set hasWiki(value: boolean | cdktf.IResolvable) {
    this._hasWiki = value;
  }
  public resetHasWiki() {
    this._hasWiki = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasWikiInput() {
    return this._hasWiki;
  }

  // homepage_url - computed: false, optional: true, required: false
  private _homepageUrl?: string; 
  public get homepageUrl() {
    return this.getStringAttribute('homepage_url');
  }
  public set homepageUrl(value: string) {
    this._homepageUrl = value;
  }
  public resetHomepageUrl() {
    this._homepageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homepageUrlInput() {
    return this._homepageUrl;
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // http_clone_url - computed: true, optional: false, required: false
  public get httpCloneUrl() {
    return this.getStringAttribute('http_clone_url');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore_vulnerability_alerts_during_read - computed: false, optional: true, required: false
  private _ignoreVulnerabilityAlertsDuringRead?: boolean | cdktf.IResolvable; 
  public get ignoreVulnerabilityAlertsDuringRead() {
    return this.getBooleanAttribute('ignore_vulnerability_alerts_during_read');
  }
  public set ignoreVulnerabilityAlertsDuringRead(value: boolean | cdktf.IResolvable) {
    this._ignoreVulnerabilityAlertsDuringRead = value;
  }
  public resetIgnoreVulnerabilityAlertsDuringRead() {
    this._ignoreVulnerabilityAlertsDuringRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreVulnerabilityAlertsDuringReadInput() {
    return this._ignoreVulnerabilityAlertsDuringRead;
  }

  // is_template - computed: false, optional: true, required: false
  private _isTemplate?: boolean | cdktf.IResolvable; 
  public get isTemplate() {
    return this.getBooleanAttribute('is_template');
  }
  public set isTemplate(value: boolean | cdktf.IResolvable) {
    this._isTemplate = value;
  }
  public resetIsTemplate() {
    this._isTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTemplateInput() {
    return this._isTemplate;
  }

  // license_template - computed: false, optional: true, required: false
  private _licenseTemplate?: string; 
  public get licenseTemplate() {
    return this.getStringAttribute('license_template');
  }
  public set licenseTemplate(value: string) {
    this._licenseTemplate = value;
  }
  public resetLicenseTemplate() {
    this._licenseTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTemplateInput() {
    return this._licenseTemplate;
  }

  // merge_commit_message - computed: false, optional: true, required: false
  private _mergeCommitMessage?: string; 
  public get mergeCommitMessage() {
    return this.getStringAttribute('merge_commit_message');
  }
  public set mergeCommitMessage(value: string) {
    this._mergeCommitMessage = value;
  }
  public resetMergeCommitMessage() {
    this._mergeCommitMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeCommitMessageInput() {
    return this._mergeCommitMessage;
  }

  // merge_commit_title - computed: false, optional: true, required: false
  private _mergeCommitTitle?: string; 
  public get mergeCommitTitle() {
    return this.getStringAttribute('merge_commit_title');
  }
  public set mergeCommitTitle(value: string) {
    this._mergeCommitTitle = value;
  }
  public resetMergeCommitTitle() {
    this._mergeCommitTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeCommitTitleInput() {
    return this._mergeCommitTitle;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // primary_language - computed: true, optional: false, required: false
  public get primaryLanguage() {
    return this.getStringAttribute('primary_language');
  }

  // private - computed: true, optional: true, required: false
  private _private?: boolean | cdktf.IResolvable; 
  public get private() {
    return this.getBooleanAttribute('private');
  }
  public set private(value: boolean | cdktf.IResolvable) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // repo_id - computed: true, optional: false, required: false
  public get repoId() {
    return this.getNumberAttribute('repo_id');
  }

  // squash_merge_commit_message - computed: false, optional: true, required: false
  private _squashMergeCommitMessage?: string; 
  public get squashMergeCommitMessage() {
    return this.getStringAttribute('squash_merge_commit_message');
  }
  public set squashMergeCommitMessage(value: string) {
    this._squashMergeCommitMessage = value;
  }
  public resetSquashMergeCommitMessage() {
    this._squashMergeCommitMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get squashMergeCommitMessageInput() {
    return this._squashMergeCommitMessage;
  }

  // squash_merge_commit_title - computed: false, optional: true, required: false
  private _squashMergeCommitTitle?: string; 
  public get squashMergeCommitTitle() {
    return this.getStringAttribute('squash_merge_commit_title');
  }
  public set squashMergeCommitTitle(value: string) {
    this._squashMergeCommitTitle = value;
  }
  public resetSquashMergeCommitTitle() {
    this._squashMergeCommitTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get squashMergeCommitTitleInput() {
    return this._squashMergeCommitTitle;
  }

  // ssh_clone_url - computed: true, optional: false, required: false
  public get sshCloneUrl() {
    return this.getStringAttribute('ssh_clone_url');
  }

  // svn_url - computed: true, optional: false, required: false
  public get svnUrl() {
    return this.getStringAttribute('svn_url');
  }

  // topics - computed: true, optional: true, required: false
  private _topics?: string[]; 
  public get topics() {
    return cdktf.Fn.tolist(this.getListAttribute('topics'));
  }
  public set topics(value: string[]) {
    this._topics = value;
  }
  public resetTopics() {
    this._topics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics;
  }

  // visibility - computed: true, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // vulnerability_alerts - computed: false, optional: true, required: false
  private _vulnerabilityAlerts?: boolean | cdktf.IResolvable; 
  public get vulnerabilityAlerts() {
    return this.getBooleanAttribute('vulnerability_alerts');
  }
  public set vulnerabilityAlerts(value: boolean | cdktf.IResolvable) {
    this._vulnerabilityAlerts = value;
  }
  public resetVulnerabilityAlerts() {
    this._vulnerabilityAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityAlertsInput() {
    return this._vulnerabilityAlerts;
  }

  // web_commit_signoff_required - computed: false, optional: true, required: false
  private _webCommitSignoffRequired?: boolean | cdktf.IResolvable; 
  public get webCommitSignoffRequired() {
    return this.getBooleanAttribute('web_commit_signoff_required');
  }
  public set webCommitSignoffRequired(value: boolean | cdktf.IResolvable) {
    this._webCommitSignoffRequired = value;
  }
  public resetWebCommitSignoffRequired() {
    this._webCommitSignoffRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCommitSignoffRequiredInput() {
    return this._webCommitSignoffRequired;
  }

  // pages - computed: false, optional: true, required: false
  private _pages = new RepositoryPagesOutputReference(this, "pages");
  public get pages() {
    return this._pages;
  }
  public putPages(value: RepositoryPages) {
    this._pages.internalValue = value;
  }
  public resetPages() {
    this._pages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagesInput() {
    return this._pages.internalValue;
  }

  // security_and_analysis - computed: false, optional: true, required: false
  private _securityAndAnalysis = new RepositorySecurityAndAnalysisOutputReference(this, "security_and_analysis");
  public get securityAndAnalysis() {
    return this._securityAndAnalysis;
  }
  public putSecurityAndAnalysis(value: RepositorySecurityAndAnalysis) {
    this._securityAndAnalysis.internalValue = value;
  }
  public resetSecurityAndAnalysis() {
    this._securityAndAnalysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAndAnalysisInput() {
    return this._securityAndAnalysis.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new RepositoryTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: RepositoryTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_auto_merge: cdktf.booleanToTerraform(this._allowAutoMerge),
      allow_merge_commit: cdktf.booleanToTerraform(this._allowMergeCommit),
      allow_rebase_merge: cdktf.booleanToTerraform(this._allowRebaseMerge),
      allow_squash_merge: cdktf.booleanToTerraform(this._allowSquashMerge),
      allow_update_branch: cdktf.booleanToTerraform(this._allowUpdateBranch),
      archive_on_destroy: cdktf.booleanToTerraform(this._archiveOnDestroy),
      archived: cdktf.booleanToTerraform(this._archived),
      auto_init: cdktf.booleanToTerraform(this._autoInit),
      default_branch: cdktf.stringToTerraform(this._defaultBranch),
      delete_branch_on_merge: cdktf.booleanToTerraform(this._deleteBranchOnMerge),
      description: cdktf.stringToTerraform(this._description),
      gitignore_template: cdktf.stringToTerraform(this._gitignoreTemplate),
      has_discussions: cdktf.booleanToTerraform(this._hasDiscussions),
      has_downloads: cdktf.booleanToTerraform(this._hasDownloads),
      has_issues: cdktf.booleanToTerraform(this._hasIssues),
      has_projects: cdktf.booleanToTerraform(this._hasProjects),
      has_wiki: cdktf.booleanToTerraform(this._hasWiki),
      homepage_url: cdktf.stringToTerraform(this._homepageUrl),
      id: cdktf.stringToTerraform(this._id),
      ignore_vulnerability_alerts_during_read: cdktf.booleanToTerraform(this._ignoreVulnerabilityAlertsDuringRead),
      is_template: cdktf.booleanToTerraform(this._isTemplate),
      license_template: cdktf.stringToTerraform(this._licenseTemplate),
      merge_commit_message: cdktf.stringToTerraform(this._mergeCommitMessage),
      merge_commit_title: cdktf.stringToTerraform(this._mergeCommitTitle),
      name: cdktf.stringToTerraform(this._name),
      private: cdktf.booleanToTerraform(this._private),
      squash_merge_commit_message: cdktf.stringToTerraform(this._squashMergeCommitMessage),
      squash_merge_commit_title: cdktf.stringToTerraform(this._squashMergeCommitTitle),
      topics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._topics),
      visibility: cdktf.stringToTerraform(this._visibility),
      vulnerability_alerts: cdktf.booleanToTerraform(this._vulnerabilityAlerts),
      web_commit_signoff_required: cdktf.booleanToTerraform(this._webCommitSignoffRequired),
      pages: repositoryPagesToTerraform(this._pages.internalValue),
      security_and_analysis: repositorySecurityAndAnalysisToTerraform(this._securityAndAnalysis.internalValue),
      template: repositoryTemplateToTerraform(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_auto_merge: {
        value: cdktf.booleanToHclTerraform(this._allowAutoMerge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_merge_commit: {
        value: cdktf.booleanToHclTerraform(this._allowMergeCommit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_rebase_merge: {
        value: cdktf.booleanToHclTerraform(this._allowRebaseMerge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_squash_merge: {
        value: cdktf.booleanToHclTerraform(this._allowSquashMerge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_update_branch: {
        value: cdktf.booleanToHclTerraform(this._allowUpdateBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      archive_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._archiveOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      archived: {
        value: cdktf.booleanToHclTerraform(this._archived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_init: {
        value: cdktf.booleanToHclTerraform(this._autoInit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_branch: {
        value: cdktf.stringToHclTerraform(this._defaultBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_branch_on_merge: {
        value: cdktf.booleanToHclTerraform(this._deleteBranchOnMerge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gitignore_template: {
        value: cdktf.stringToHclTerraform(this._gitignoreTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_discussions: {
        value: cdktf.booleanToHclTerraform(this._hasDiscussions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_downloads: {
        value: cdktf.booleanToHclTerraform(this._hasDownloads),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_issues: {
        value: cdktf.booleanToHclTerraform(this._hasIssues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_projects: {
        value: cdktf.booleanToHclTerraform(this._hasProjects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_wiki: {
        value: cdktf.booleanToHclTerraform(this._hasWiki),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      homepage_url: {
        value: cdktf.stringToHclTerraform(this._homepageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_vulnerability_alerts_during_read: {
        value: cdktf.booleanToHclTerraform(this._ignoreVulnerabilityAlertsDuringRead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_template: {
        value: cdktf.booleanToHclTerraform(this._isTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      license_template: {
        value: cdktf.stringToHclTerraform(this._licenseTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merge_commit_message: {
        value: cdktf.stringToHclTerraform(this._mergeCommitMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merge_commit_title: {
        value: cdktf.stringToHclTerraform(this._mergeCommitTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private: {
        value: cdktf.booleanToHclTerraform(this._private),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      squash_merge_commit_message: {
        value: cdktf.stringToHclTerraform(this._squashMergeCommitMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      squash_merge_commit_title: {
        value: cdktf.stringToHclTerraform(this._squashMergeCommitTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topics: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._topics),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vulnerability_alerts: {
        value: cdktf.booleanToHclTerraform(this._vulnerabilityAlerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_commit_signoff_required: {
        value: cdktf.booleanToHclTerraform(this._webCommitSignoffRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pages: {
        value: repositoryPagesToHclTerraform(this._pages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryPagesList",
      },
      security_and_analysis: {
        value: repositorySecurityAndAnalysisToHclTerraform(this._securityAndAnalysis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositorySecurityAndAnalysisList",
      },
      template: {
        value: repositoryTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
