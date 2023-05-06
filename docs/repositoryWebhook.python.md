# `github_repository_webhook`

Refer to the Terraform Registory for docs: [`github_repository_webhook`](https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook).

# `repositoryWebhook` Submodule <a name="`repositoryWebhook` Submodule" id="@cdktf/provider-github.repositoryWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryWebhook <a name="RepositoryWebhook" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook github_repository_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_webhook

repositoryWebhook.RepositoryWebhook(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  events: typing.List[str],
  repository: str,
  active: typing.Union[bool, IResolvable] = None,
  configuration: RepositoryWebhookConfiguration = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.events">events</a></code> | <code>typing.List[str]</code> | A list of events which should trigger the webhook. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.repository">repository</a></code> | <code>str</code> | The repository of the webhook. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicate if the webhook should receive events. Defaults to 'true'. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration">RepositoryWebhookConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#id RepositoryWebhook#id}. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#name RepositoryWebhook#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.events"></a>

- *Type:* typing.List[str]

A list of events which should trigger the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#events RepositoryWebhook#events}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.repository"></a>

- *Type:* str

The repository of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#repository RepositoryWebhook#repository}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.active"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicate if the webhook should receive events. Defaults to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#active RepositoryWebhook#active}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration">RepositoryWebhookConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#configuration RepositoryWebhook#configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#id RepositoryWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#name RepositoryWebhook#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_configuration` <a name="put_configuration" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.putConfiguration"></a>

```python
def put_configuration(
  url: str,
  content_type: str = None,
  insecure_ssl: typing.Union[bool, IResolvable] = None,
  secret: str = None
) -> None
```

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.putConfiguration.parameter.url"></a>

- *Type:* str

The URL of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#url RepositoryWebhook#url}

---

###### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.putConfiguration.parameter.contentType"></a>

- *Type:* str

The content type for the payload. Valid values are either 'form' or 'json'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#content_type RepositoryWebhook#content_type}

---

###### `insecure_ssl`<sup>Optional</sup> <a name="insecure_ssl" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.putConfiguration.parameter.insecureSsl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Insecure SSL boolean toggle. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#insecure_ssl RepositoryWebhook#insecure_ssl}

---

###### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.putConfiguration.parameter.secret"></a>

- *Type:* str

The shared secret for the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#secret RepositoryWebhook#secret}

---

##### `reset_active` <a name="reset_active" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_configuration` <a name="reset_configuration" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import repository_webhook

repositoryWebhook.RepositoryWebhook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import repository_webhook

repositoryWebhook.RepositoryWebhook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import repository_webhook

repositoryWebhook.RepositoryWebhook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference">RepositoryWebhookConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.activeInput">active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.configurationInput">configuration_input</a></code> | <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration">RepositoryWebhookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.repository">repository</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.configuration"></a>

```python
configuration: RepositoryWebhookConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference">RepositoryWebhookConfigurationOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.activeInput"></a>

```python
active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.configurationInput"></a>

```python
configuration_input: RepositoryWebhookConfiguration
```

- *Type:* <a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration">RepositoryWebhookConfiguration</a>

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryWebhookConfig <a name="RepositoryWebhookConfig" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_webhook

repositoryWebhook.RepositoryWebhookConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  events: typing.List[str],
  repository: str,
  active: typing.Union[bool, IResolvable] = None,
  configuration: RepositoryWebhookConfiguration = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.events">events</a></code> | <code>typing.List[str]</code> | A list of events which should trigger the webhook. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.repository">repository</a></code> | <code>str</code> | The repository of the webhook. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicate if the webhook should receive events. Defaults to 'true'. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration">RepositoryWebhookConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#id RepositoryWebhook#id}. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#name RepositoryWebhook#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

A list of events which should trigger the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#events RepositoryWebhook#events}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

The repository of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#repository RepositoryWebhook#repository}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicate if the webhook should receive events. Defaults to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#active RepositoryWebhook#active}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.configuration"></a>

```python
configuration: RepositoryWebhookConfiguration
```

- *Type:* <a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration">RepositoryWebhookConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#configuration RepositoryWebhook#configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#id RepositoryWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#name RepositoryWebhook#name}.

---

### RepositoryWebhookConfiguration <a name="RepositoryWebhookConfiguration" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_webhook

repositoryWebhook.RepositoryWebhookConfiguration(
  url: str,
  content_type: str = None,
  insecure_ssl: typing.Union[bool, IResolvable] = None,
  secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration.property.url">url</a></code> | <code>str</code> | The URL of the webhook. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration.property.contentType">content_type</a></code> | <code>str</code> | The content type for the payload. Valid values are either 'form' or 'json'. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration.property.insecureSsl">insecure_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Insecure SSL boolean toggle. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration.property.secret">secret</a></code> | <code>str</code> | The shared secret for the webhook. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration.property.url"></a>

```python
url: str
```

- *Type:* str

The URL of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#url RepositoryWebhook#url}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

The content type for the payload. Valid values are either 'form' or 'json'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#content_type RepositoryWebhook#content_type}

---

##### `insecure_ssl`<sup>Optional</sup> <a name="insecure_ssl" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration.property.insecureSsl"></a>

```python
insecure_ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Insecure SSL boolean toggle. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#insecure_ssl RepositoryWebhook#insecure_ssl}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration.property.secret"></a>

```python
secret: str
```

- *Type:* str

The shared secret for the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/resources/repository_webhook#secret RepositoryWebhook#secret}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryWebhookConfigurationOutputReference <a name="RepositoryWebhookConfigurationOutputReference" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_webhook

repositoryWebhook.RepositoryWebhookConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.resetInsecureSsl">reset_insecure_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.resetSecret">reset_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_insecure_ssl` <a name="reset_insecure_ssl" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.resetInsecureSsl"></a>

```python
def reset_insecure_ssl() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.insecureSslInput">insecure_ssl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.insecureSsl">insecure_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration">RepositoryWebhookConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `insecure_ssl_input`<sup>Optional</sup> <a name="insecure_ssl_input" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.insecureSslInput"></a>

```python
insecure_ssl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `insecure_ssl`<sup>Required</sup> <a name="insecure_ssl" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.insecureSsl"></a>

```python
insecure_ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: RepositoryWebhookConfiguration
```

- *Type:* <a href="#@cdktf/provider-github.repositoryWebhook.RepositoryWebhookConfiguration">RepositoryWebhookConfiguration</a>

---



