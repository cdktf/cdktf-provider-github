# `github_repository_file`

Refer to the Terraform Registory for docs: [`github_repository_file`](https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file).

# `repositoryFile` Submodule <a name="`repositoryFile` Submodule" id="@cdktf/provider-github.repositoryFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryFile <a name="RepositoryFile" id="@cdktf/provider-github.repositoryFile.RepositoryFile"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file github_repository_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_file

repositoryFile.RepositoryFile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  content: str,
  file: str,
  repository: str,
  branch: str = None,
  commit_author: str = None,
  commit_email: str = None,
  commit_message: str = None,
  id: str = None,
  overwrite_on_create: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.content">content</a></code> | <code>str</code> | The file's content. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.file">file</a></code> | <code>str</code> | The file path to manage. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.repository">repository</a></code> | <code>str</code> | The repository name. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.branch">branch</a></code> | <code>str</code> | The branch name, defaults to the repository's default branch. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.commitAuthor">commit_author</a></code> | <code>str</code> | The commit author name, defaults to the authenticated user's name. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.commitEmail">commit_email</a></code> | <code>str</code> | The commit author email address, defaults to the authenticated user's email address. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.commitMessage">commit_message</a></code> | <code>str</code> | The commit message when creating, updating or deleting the file. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#id RepositoryFile#id}. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.overwriteOnCreate">overwrite_on_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable overwriting existing files, defaults to "false". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.content"></a>

- *Type:* str

The file's content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#content RepositoryFile#content}

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.file"></a>

- *Type:* str

The file path to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#file RepositoryFile#file}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.repository"></a>

- *Type:* str

The repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#repository RepositoryFile#repository}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.branch"></a>

- *Type:* str

The branch name, defaults to the repository's default branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#branch RepositoryFile#branch}

---

##### `commit_author`<sup>Optional</sup> <a name="commit_author" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.commitAuthor"></a>

- *Type:* str

The commit author name, defaults to the authenticated user's name.

GitHub app users may omit author and email information so GitHub can verify commits as the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#commit_author RepositoryFile#commit_author}

---

##### `commit_email`<sup>Optional</sup> <a name="commit_email" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.commitEmail"></a>

- *Type:* str

The commit author email address, defaults to the authenticated user's email address.

GitHub app users may omit author and email information so GitHub can verify commits as the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#commit_email RepositoryFile#commit_email}

---

##### `commit_message`<sup>Optional</sup> <a name="commit_message" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.commitMessage"></a>

- *Type:* str

The commit message when creating, updating or deleting the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#commit_message RepositoryFile#commit_message}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#id RepositoryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overwrite_on_create`<sup>Optional</sup> <a name="overwrite_on_create" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.overwriteOnCreate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable overwriting existing files, defaults to "false".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#overwrite_on_create RepositoryFile#overwrite_on_create}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitAuthor">reset_commit_author</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitEmail">reset_commit_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitMessage">reset_commit_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetOverwriteOnCreate">reset_overwrite_on_create</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repositoryFile.RepositoryFile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.repositoryFile.RepositoryFile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryFile.RepositoryFile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryFile.RepositoryFile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.repositoryFile.RepositoryFile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.repositoryFile.RepositoryFile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_branch` <a name="reset_branch" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_commit_author` <a name="reset_commit_author" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitAuthor"></a>

```python
def reset_commit_author() -> None
```

##### `reset_commit_email` <a name="reset_commit_email" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitEmail"></a>

```python
def reset_commit_email() -> None
```

##### `reset_commit_message` <a name="reset_commit_message" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitMessage"></a>

```python
def reset_commit_message() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_overwrite_on_create` <a name="reset_overwrite_on_create" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetOverwriteOnCreate"></a>

```python
def reset_overwrite_on_create() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import repository_file

repositoryFile.RepositoryFile.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import repository_file

repositoryFile.RepositoryFile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import repository_file

repositoryFile.RepositoryFile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitSha">commit_sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.sha">sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitAuthorInput">commit_author_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitEmailInput">commit_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitMessageInput">commit_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.overwriteOnCreateInput">overwrite_on_create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitAuthor">commit_author</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitEmail">commit_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitMessage">commit_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.overwriteOnCreate">overwrite_on_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.repository">repository</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `commit_sha`<sup>Required</sup> <a name="commit_sha" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitSha"></a>

```python
commit_sha: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.sha"></a>

```python
sha: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `commit_author_input`<sup>Optional</sup> <a name="commit_author_input" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitAuthorInput"></a>

```python
commit_author_input: str
```

- *Type:* str

---

##### `commit_email_input`<sup>Optional</sup> <a name="commit_email_input" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitEmailInput"></a>

```python
commit_email_input: str
```

- *Type:* str

---

##### `commit_message_input`<sup>Optional</sup> <a name="commit_message_input" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitMessageInput"></a>

```python
commit_message_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `overwrite_on_create_input`<sup>Optional</sup> <a name="overwrite_on_create_input" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.overwriteOnCreateInput"></a>

```python
overwrite_on_create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `commit_author`<sup>Required</sup> <a name="commit_author" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitAuthor"></a>

```python
commit_author: str
```

- *Type:* str

---

##### `commit_email`<sup>Required</sup> <a name="commit_email" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitEmail"></a>

```python
commit_email: str
```

- *Type:* str

---

##### `commit_message`<sup>Required</sup> <a name="commit_message" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitMessage"></a>

```python
commit_message: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `overwrite_on_create`<sup>Required</sup> <a name="overwrite_on_create" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.overwriteOnCreate"></a>

```python
overwrite_on_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryFileConfig <a name="RepositoryFileConfig" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_file

repositoryFile.RepositoryFileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  content: str,
  file: str,
  repository: str,
  branch: str = None,
  commit_author: str = None,
  commit_email: str = None,
  commit_message: str = None,
  id: str = None,
  overwrite_on_create: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.content">content</a></code> | <code>str</code> | The file's content. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.file">file</a></code> | <code>str</code> | The file path to manage. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.repository">repository</a></code> | <code>str</code> | The repository name. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.branch">branch</a></code> | <code>str</code> | The branch name, defaults to the repository's default branch. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitAuthor">commit_author</a></code> | <code>str</code> | The commit author name, defaults to the authenticated user's name. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitEmail">commit_email</a></code> | <code>str</code> | The commit author email address, defaults to the authenticated user's email address. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitMessage">commit_message</a></code> | <code>str</code> | The commit message when creating, updating or deleting the file. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#id RepositoryFile#id}. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.overwriteOnCreate">overwrite_on_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable overwriting existing files, defaults to "false". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.content"></a>

```python
content: str
```

- *Type:* str

The file's content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#content RepositoryFile#content}

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.file"></a>

```python
file: str
```

- *Type:* str

The file path to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#file RepositoryFile#file}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

The repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#repository RepositoryFile#repository}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.branch"></a>

```python
branch: str
```

- *Type:* str

The branch name, defaults to the repository's default branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#branch RepositoryFile#branch}

---

##### `commit_author`<sup>Optional</sup> <a name="commit_author" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitAuthor"></a>

```python
commit_author: str
```

- *Type:* str

The commit author name, defaults to the authenticated user's name.

GitHub app users may omit author and email information so GitHub can verify commits as the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#commit_author RepositoryFile#commit_author}

---

##### `commit_email`<sup>Optional</sup> <a name="commit_email" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitEmail"></a>

```python
commit_email: str
```

- *Type:* str

The commit author email address, defaults to the authenticated user's email address.

GitHub app users may omit author and email information so GitHub can verify commits as the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#commit_email RepositoryFile#commit_email}

---

##### `commit_message`<sup>Optional</sup> <a name="commit_message" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitMessage"></a>

```python
commit_message: str
```

- *Type:* str

The commit message when creating, updating or deleting the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#commit_message RepositoryFile#commit_message}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#id RepositoryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overwrite_on_create`<sup>Optional</sup> <a name="overwrite_on_create" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.overwriteOnCreate"></a>

```python
overwrite_on_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable overwriting existing files, defaults to "false".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_file#overwrite_on_create RepositoryFile#overwrite_on_create}

---



