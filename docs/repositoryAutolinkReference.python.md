# `github_repository_autolink_reference`

Refer to the Terraform Registory for docs: [`github_repository_autolink_reference`](https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_autolink_reference).

# `repositoryAutolinkReference` Submodule <a name="`repositoryAutolinkReference` Submodule" id="@cdktf/provider-github.repositoryAutolinkReference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryAutolinkReference <a name="RepositoryAutolinkReference" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_autolink_reference github_repository_autolink_reference}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_autolink_reference

repositoryAutolinkReference.RepositoryAutolinkReference(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_prefix: str,
  repository: str,
  target_url_template: str,
  id: str = None,
  is_alphanumeric: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.keyPrefix">key_prefix</a></code> | <code>str</code> | This prefix appended by a number will generate a link any time it is found in an issue, pull request, or commit. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.repository">repository</a></code> | <code>str</code> | The repository name. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.targetUrlTemplate">target_url_template</a></code> | <code>str</code> | The template of the target URL used for the links; |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_autolink_reference#id RepositoryAutolinkReference#id}. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.isAlphanumeric">is_alphanumeric</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this autolink reference matches alphanumeric characters. If false, this autolink reference only matches numeric characters. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_prefix`<sup>Required</sup> <a name="key_prefix" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.keyPrefix"></a>

- *Type:* str

This prefix appended by a number will generate a link any time it is found in an issue, pull request, or commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_autolink_reference#key_prefix RepositoryAutolinkReference#key_prefix}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.repository"></a>

- *Type:* str

The repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_autolink_reference#repository RepositoryAutolinkReference#repository}

---

##### `target_url_template`<sup>Required</sup> <a name="target_url_template" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.targetUrlTemplate"></a>

- *Type:* str

The template of the target URL used for the links;

must be a valid URL and contain `<num>` for the reference number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_autolink_reference#target_url_template RepositoryAutolinkReference#target_url_template}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_autolink_reference#id RepositoryAutolinkReference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_alphanumeric`<sup>Optional</sup> <a name="is_alphanumeric" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.isAlphanumeric"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this autolink reference matches alphanumeric characters. If false, this autolink reference only matches numeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_autolink_reference#is_alphanumeric RepositoryAutolinkReference#is_alphanumeric}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetIsAlphanumeric">reset_is_alphanumeric</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_alphanumeric` <a name="reset_is_alphanumeric" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetIsAlphanumeric"></a>

```python
def reset_is_alphanumeric() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import repository_autolink_reference

repositoryAutolinkReference.RepositoryAutolinkReference.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import repository_autolink_reference

repositoryAutolinkReference.RepositoryAutolinkReference.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import repository_autolink_reference

repositoryAutolinkReference.RepositoryAutolinkReference.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.isAlphanumericInput">is_alphanumeric_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.keyPrefixInput">key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.targetUrlTemplateInput">target_url_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.isAlphanumeric">is_alphanumeric</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.keyPrefix">key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.targetUrlTemplate">target_url_template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_alphanumeric_input`<sup>Optional</sup> <a name="is_alphanumeric_input" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.isAlphanumericInput"></a>

```python
is_alphanumeric_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_prefix_input`<sup>Optional</sup> <a name="key_prefix_input" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.keyPrefixInput"></a>

```python
key_prefix_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `target_url_template_input`<sup>Optional</sup> <a name="target_url_template_input" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.targetUrlTemplateInput"></a>

```python
target_url_template_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_alphanumeric`<sup>Required</sup> <a name="is_alphanumeric" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.isAlphanumeric"></a>

```python
is_alphanumeric: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_prefix`<sup>Required</sup> <a name="key_prefix" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `target_url_template`<sup>Required</sup> <a name="target_url_template" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.targetUrlTemplate"></a>

```python
target_url_template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryAutolinkReferenceConfig <a name="RepositoryAutolinkReferenceConfig" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_autolink_reference

repositoryAutolinkReference.RepositoryAutolinkReferenceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_prefix: str,
  repository: str,
  target_url_template: str,
  id: str = None,
  is_alphanumeric: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.keyPrefix">key_prefix</a></code> | <code>str</code> | This prefix appended by a number will generate a link any time it is found in an issue, pull request, or commit. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.repository">repository</a></code> | <code>str</code> | The repository name. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.targetUrlTemplate">target_url_template</a></code> | <code>str</code> | The template of the target URL used for the links; |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_autolink_reference#id RepositoryAutolinkReference#id}. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.isAlphanumeric">is_alphanumeric</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this autolink reference matches alphanumeric characters. If false, this autolink reference only matches numeric characters. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_prefix`<sup>Required</sup> <a name="key_prefix" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

This prefix appended by a number will generate a link any time it is found in an issue, pull request, or commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_autolink_reference#key_prefix RepositoryAutolinkReference#key_prefix}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

The repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_autolink_reference#repository RepositoryAutolinkReference#repository}

---

##### `target_url_template`<sup>Required</sup> <a name="target_url_template" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.targetUrlTemplate"></a>

```python
target_url_template: str
```

- *Type:* str

The template of the target URL used for the links;

must be a valid URL and contain `<num>` for the reference number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_autolink_reference#target_url_template RepositoryAutolinkReference#target_url_template}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_autolink_reference#id RepositoryAutolinkReference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_alphanumeric`<sup>Optional</sup> <a name="is_alphanumeric" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.isAlphanumeric"></a>

```python
is_alphanumeric: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this autolink reference matches alphanumeric characters. If false, this autolink reference only matches numeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_autolink_reference#is_alphanumeric RepositoryAutolinkReference#is_alphanumeric}

---



