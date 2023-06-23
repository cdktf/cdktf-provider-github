// https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/repository#description DataGithubRepository#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/repository#full_name DataGithubRepository#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/repository#homepage_url DataGithubRepository#homepage_url}
  */
  readonly homepageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/repository#id DataGithubRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/repository#name DataGithubRepository#name}
  */
  readonly name?: string;
}
export interface DataGithubRepositoryPagesSource {
}

export function dataGithubRepositoryPagesSourceToTerraform(struct?: DataGithubRepositoryPagesSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGithubRepositoryPagesSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGithubRepositoryPagesSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGithubRepositoryPagesSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataGithubRepositoryPagesSourceList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGithubRepositoryPagesSourceOutputReference {
    return new DataGithubRepositoryPagesSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGithubRepositoryPages {
}

export function dataGithubRepositoryPagesToTerraform(struct?: DataGithubRepositoryPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGithubRepositoryPagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGithubRepositoryPages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGithubRepositoryPages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build_type - computed: true, optional: false, required: false
  public get buildType() {
    return this.getStringAttribute('build_type');
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // custom_404 - computed: true, optional: false, required: false
  public get custom404() {
    return this.getBooleanAttribute('custom_404');
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataGithubRepositoryPagesSourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataGithubRepositoryPagesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGithubRepositoryPagesOutputReference {
    return new DataGithubRepositoryPagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGithubRepositoryTemplate {
}

export function dataGithubRepositoryTemplateToTerraform(struct?: DataGithubRepositoryTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGithubRepositoryTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGithubRepositoryTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGithubRepositoryTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }
}

export class DataGithubRepositoryTemplateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGithubRepositoryTemplateOutputReference {
    return new DataGithubRepositoryTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/repository github_repository}
*/
export class DataGithubRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/repository github_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubRepositoryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGithubRepositoryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'github_repository',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.28.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._fullName = config.fullName;
    this._homepageUrl = config.homepageUrl;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_auto_merge - computed: true, optional: false, required: false
  public get allowAutoMerge() {
    return this.getBooleanAttribute('allow_auto_merge');
  }

  // allow_merge_commit - computed: true, optional: false, required: false
  public get allowMergeCommit() {
    return this.getBooleanAttribute('allow_merge_commit');
  }

  // allow_rebase_merge - computed: true, optional: false, required: false
  public get allowRebaseMerge() {
    return this.getBooleanAttribute('allow_rebase_merge');
  }

  // allow_squash_merge - computed: true, optional: false, required: false
  public get allowSquashMerge() {
    return this.getBooleanAttribute('allow_squash_merge');
  }

  // archived - computed: true, optional: false, required: false
  public get archived() {
    return this.getBooleanAttribute('archived');
  }

  // default_branch - computed: true, optional: false, required: false
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
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

  // fork - computed: true, optional: false, required: false
  public get fork() {
    return this.getBooleanAttribute('fork');
  }

  // full_name - computed: true, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // git_clone_url - computed: true, optional: false, required: false
  public get gitCloneUrl() {
    return this.getStringAttribute('git_clone_url');
  }

  // has_discussions - computed: true, optional: false, required: false
  public get hasDiscussions() {
    return this.getBooleanAttribute('has_discussions');
  }

  // has_downloads - computed: true, optional: false, required: false
  public get hasDownloads() {
    return this.getBooleanAttribute('has_downloads');
  }

  // has_issues - computed: true, optional: false, required: false
  public get hasIssues() {
    return this.getBooleanAttribute('has_issues');
  }

  // has_projects - computed: true, optional: false, required: false
  public get hasProjects() {
    return this.getBooleanAttribute('has_projects');
  }

  // has_wiki - computed: true, optional: false, required: false
  public get hasWiki() {
    return this.getBooleanAttribute('has_wiki');
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

  // is_template - computed: true, optional: false, required: false
  public get isTemplate() {
    return this.getBooleanAttribute('is_template');
  }

  // merge_commit_message - computed: true, optional: false, required: false
  public get mergeCommitMessage() {
    return this.getStringAttribute('merge_commit_message');
  }

  // merge_commit_title - computed: true, optional: false, required: false
  public get mergeCommitTitle() {
    return this.getStringAttribute('merge_commit_title');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // pages - computed: true, optional: false, required: false
  private _pages = new DataGithubRepositoryPagesList(this, "pages", false);
  public get pages() {
    return this._pages;
  }

  // private - computed: true, optional: false, required: false
  public get private() {
    return this.getBooleanAttribute('private');
  }

  // repo_id - computed: true, optional: false, required: false
  public get repoId() {
    return this.getNumberAttribute('repo_id');
  }

  // squash_merge_commit_message - computed: true, optional: false, required: false
  public get squashMergeCommitMessage() {
    return this.getStringAttribute('squash_merge_commit_message');
  }

  // squash_merge_commit_title - computed: true, optional: false, required: false
  public get squashMergeCommitTitle() {
    return this.getStringAttribute('squash_merge_commit_title');
  }

  // ssh_clone_url - computed: true, optional: false, required: false
  public get sshCloneUrl() {
    return this.getStringAttribute('ssh_clone_url');
  }

  // svn_url - computed: true, optional: false, required: false
  public get svnUrl() {
    return this.getStringAttribute('svn_url');
  }

  // template - computed: true, optional: false, required: false
  private _template = new DataGithubRepositoryTemplateList(this, "template", false);
  public get template() {
    return this._template;
  }

  // topics - computed: true, optional: false, required: false
  public get topics() {
    return this.getListAttribute('topics');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      full_name: cdktf.stringToTerraform(this._fullName),
      homepage_url: cdktf.stringToTerraform(this._homepageUrl),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
